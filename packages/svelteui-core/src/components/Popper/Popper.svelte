<script lang="ts">
	import useStyles from './Popper.styles';
	import { calculateArrowPlacement } from './Popper.styles';
	import { arrow, autoUpdate, computePosition, offset, flip, shift } from '@floating-ui/dom';
	import { get_current_component, onDestroy } from 'svelte/internal';
	import { createEventForwarder, getTransition, useActions } from '$lib/internal';
	import type { Placement } from '@floating-ui/dom';
	import type { PopperProps as $$PopperProps } from './Popper';

	interface $$Props extends $$PopperProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		position: $$Props['position'] = 'top',
		placement: $$Props['placement'] = 'center',
		gutter: $$Props['gutter'] = 5,
		arrowSize: $$Props['arrowSize'] = 3,
		arrowDistance: $$Props['arrowDistance'] = 3,
		arrowClassName: $$Props['arrowClassName'] = 'arrow',
		withArrow: $$Props['withArrow'] = false,
		zIndex: $$Props['zIndex'] = 1,
		transition: $$Props['transition'] = 'fade',
		transitionOptions: $$Props['transitionOptions'] = { duration: 100 },
		exitTransition: $$Props['exitTransition'] = transition,
		exitTransitionOptions: $$Props['exitTransitionOptions'] = transitionOptions,
		mounted: $$Props['mounted'] = false,
		reference: $$Props['reference'] = null;
	export { className as class };

	let cleanup = () => {};
	let arrowElement;

	const forwardEvents = createEventForwarder(get_current_component());

	onDestroy(() => {
		cleanup();
	});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	function updatePopper(_) {
		if (!element || !reference) return;

		const _placement = placement;
		const placementString = placement !== 'center' ? `${position}-${placement}` : position;

		const middleware = [offset(gutter), flip(), shift({ padding: 10 })];
		if (withArrow) middleware.push(arrow({ element: arrowElement, padding: arrowDistance }));

		computePosition(reference, element, {
			placement: placementString as Placement,
			middleware: middleware
		}).then(({ x, y, placement, middlewareData }) => {
			// the element might have been removed between the
			// composition computing and its callback
			if (!element) return;

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

	$: _mounted = mounted;
	$: _transition = getTransition(transition) as any;
	$: _exitTransition = getTransition(exitTransition) as any;
	$: updatePopper({ ...$$props });
	$: ({ cx, classes, getStyles } = useStyles({ arrowSize, zIndex }, { name: "Popper" }));
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

{#if _mounted}
	<div
		bind:this={element}
		use:useActions={use}
		use:forwardEvents
		class={cx(className, getStyles({ css: override }))}
		in:_transition={transitionOptions}
		out:_exitTransition={exitTransitionOptions}
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
