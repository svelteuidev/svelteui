<script lang="ts">
	import useStyles from './Popper.styles';
	import { calculateArrowPlacement } from './Popper.styles';
	import { fade } from 'svelte/transition';
	import { arrow, autoUpdate, computePosition, offset, flip, shift } from '@floating-ui/dom';
	import { get_current_component, onDestroy } from 'svelte/internal';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { Placement } from '@floating-ui/dom';
	import type { PopperProps as $$PopperProps } from './Popper.styles';
	export let use: $$PopperProps['use'] = [],
		element: $$PopperProps['element'] = undefined,
		className: $$PopperProps['className'] = '',
		override: $$PopperProps['override'] = {},
		position: $$PopperProps['position'] = 'top',
		placement: $$PopperProps['placement'] = 'center',
		gutter: $$PopperProps['gutter'] = 5,
		arrowSize: $$PopperProps['arrowSize'] = 3,
		arrowDistance: $$PopperProps['arrowDistance'] = 3,
		arrowClassName: $$PopperProps['arrowClassName'] = 'arrow',
		withArrow: $$PopperProps['withArrow'] = false,
		zIndex: $$PopperProps['zIndex'] = 1,
		transition: $$PopperProps['transition'] = fade,
		transitionDuration: $$PopperProps['transitionDuration'] = 100,
		exitTransition: $$PopperProps['exitTransition'] = transition,
		exitTransitionDuration: $$PopperProps['exitTransitionDuration'] = transitionDuration,
		mounted: $$PopperProps['mounted'] = false,
		reference: $$PopperProps['reference'] = null;
	export { className as class };

	let cleanup = () => {};
	let arrowElement;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	onDestroy(() => {
		cleanup();
	});

	function updatePopper(_props) {
		if (!element || !reference) return;

		const _placement = placement;
		const placementString = placement !== 'center' ? `${position}-${placement}` : position;

		const middleware = [offset(gutter), flip(), shift({ padding: 10 })];
		if (withArrow) middleware.push(arrow({ element: arrowElement, padding: arrowDistance }));

		computePosition(reference, element, {
			placement: placementString as Placement,
			middleware: middleware
		}).then(({ x, y, placement, middlewareData }) => {
			Object.assign(element.style, {
				left: `${x}px`,
				top: `${y}px`
			});
			
			// return early if no arrow is wanted in the popper
			if (!withArrow) return;

			const { x: arrowX, y: arrowY } = middlewareData.arrow;
			const _position = placement.split('-')[0];
			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right'
			}[_position];

			Object.assign(arrowElement.style, {
				left: arrowX != null ? `${arrowX}px` : 'unset',
				top: arrowY != null ? `${arrowY}px` : 'unset',
				[staticSide]: `${-1 * arrowSize}px`,
				...(_placement !== 'center'
					? calculateArrowPlacement(arrowSize, arrowDistance, _position, _placement)
					: {})
			});
		});
	}

	$: {
		// setup the auto update once the element and reference are mounted
		// so that udpates to the popper are made when the parent elements
		// are resized, scroll, etc
		if (element && reference) {
			cleanup = autoUpdate(reference, element, () => {
				updatePopper({ ...$$props });
			});
		}
	}

	$: updatePopper({ ...$$props });
	$: ({ cx, classes, getStyles } = useStyles({ arrowSize, zIndex }));
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Shows content that is positioned based on the reference element provided as well as the psitioning
and placement options.
	
@see https://svelteui.org/core/overlay
@example
    ```svelte
	<Button bind:element={ref} on:click={() => mounted = !mounted }>Click here</Button>
	<Popper
		reference={ref}
		placement="center"
		position="bottom"
		{mounted}
		withArrow={true}
		override={{ '& .arrow': { backgroundColor: '$gray100' } }}
	>
		<Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
			<Center css={{ width: 100 }}>
				<Text>This is a very long text</Text>
			</Center>
		</Box>
	</Popper>
    ```
-->

{#if mounted}
	<div
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class={cx(className, getStyles({ css: override }))}
		in:transition={{ duration: transitionDuration }}
		out:exitTransition={{ duration: exitTransitionDuration }}
	>
		{#if withArrow}
			<div
				class={cx(arrowClassName, { arrowClassName: true }, classes.arrowStyles)}
				bind:this={arrowElement}
			/>
		{/if}
		<slot />
	</div>
{/if}
