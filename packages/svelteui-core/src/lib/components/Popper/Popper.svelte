<script lang="ts">
	import useStyles from './Popper.styles';
	import { fade } from 'svelte/transition';
	import { arrow, computePosition, offset, flip, shift } from '@floating-ui/dom';
	import { get_current_component } from 'svelte/internal';
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
		arrowSize: $$PopperProps['arrowSize'] = 4,
		arrowDistance: $$PopperProps['arrowDistance'] = 4,
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

	let arrowElement;
	let popperPosition = {
		top: 0,
		left: 0
	};
	let arrowPosition = {
		top: 0,
		left: 0
	};

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	function updatePopper(props) {
		if (!element || !reference) return;

		const placementString = placement !== 'center'
			? `${position}-${placement}`
			: position;

		const middleware = [offset(gutter), flip(), shift({ padding: 10 })];
		if (props.withArrow) middleware.push(arrow({ element: arrowElement }));


		computePosition(reference, element, {
			placement: placementString as Placement,
			middleware: middleware,
		}).then(({ x, y, placement, middlewareData }) => {

			Object.assign(element.style, {
				left: `${x}px`,
				top: `${y}px`
			});

			const { x: arrowX, y: arrowY } = middlewareData.arrow;
			const staticSide = {
				top: 'bottom',
				right: 'left',
				bottom: 'top',
				left: 'right',
			}[placement.split('-')[0]];

			// @todo: adapt to add arrowDistance prop

			Object.assign(arrowElement.style, {
				left: arrowX != null ? `${arrowX}px` : '',
    			top: arrowY != null ? `${arrowY}px` : '',
				[staticSide]: '-3px'
			});
		});
	}

	$: updatePopper({ ...$$props })
	$: ({ cx, classes, getStyles } = useStyles({ arrowSize, zIndex, popperPosition, arrowPosition }));

	const noop = () => position;
	noop();
</script>

<!-- <svelte:window on:resize={onResize} on:scroll={onScroll} /> -->

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
		arrowOverride={{ backgroundColor: '$gray100' }}
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
			<div class={cx(arrowClassName, { arrowClassName: true }, classes.arrowStyles)} bind:this={arrowElement} />
		{/if}
		<slot />
	</div>
{/if}
