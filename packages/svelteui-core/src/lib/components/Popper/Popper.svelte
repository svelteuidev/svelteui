<script lang="ts">
	import { fade } from 'svelte/transition';
	import { css } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { PopperProps as $$PopperProps } from './Popper.styles';

	/** Used for forwarding actions from component */
	export let use: $$PopperProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$PopperProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$PopperProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$PopperProps['override'] = {};
	/** The positioning of the popper relative to the reference */
	export let position: $$PopperProps['position'] = 'top';
	/** The placement of the popper relative to the reference */
	export let placement: $$PopperProps['placement'] = 'center';
	/** Spacing between the reference and the popper, in pixels */
	export let gutter: $$PopperProps['gutter'] = 5;
	/** The size of the arrow, in pixels */
	export let arrowSize: $$PopperProps['arrowSize'] = 4;
	/** The distance of the arrow to the container's left or right */
	export let arrowDistance: $$PopperProps['arrowDistance'] = 4;
	/** Css prop for custom theming the arrow of the popper */
	export let arrowOverride: $$PopperProps['arrowOverride'] = {};
	/** The arrow class name */
	export let arrowClassName: $$PopperProps['arrowClassName'] = '';
	/** Renders the popper arrow if true */
	export let withArrow: $$PopperProps['withArrow'] = false;
	/** Popper z-index */
	export let zIndex: $$PopperProps['zIndex'] = 1;
	/** The transition of the popper mount/unmount */
	export let transition: $$PopperProps['transition'] = fade;
	/** The transition duration of the popper mount/unmount */
	export let transitionDuration: $$PopperProps['transitionDuration'] = 100;
	/** The exit transition of the popper mount/unmount, defaults to the transition */
	export let exitTransition: $$PopperProps['exitTransition'] = transition;
	/** The exit transition duration of the popper mount/unmount, defaults to the transitionDuration */
	export let exitTransitionDuration: $$PopperProps['exitTransitionDuration'] = transitionDuration;
	/** If enabled, shows popper, if false, hides popper */
	export let mounted: $$PopperProps['mounted'] = false;
	/** The element that servers as the reference for the popper positioning */
	export let reference: $$PopperProps['reference'] = null;
	/** Whether to render the target element in a Portal
	 * export let withinPortal: $$PopperProps['withinPortal'] = false;
	 */

	let popperPosition, originalPopperPosition;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	$: PopperStyles = css({
		position: 'absolute',
		top: popperPosition?.top,
		left: popperPosition?.left,
		pointerEvents: 'none',
		zIndex: zIndex
	});

	$: ArrowStyles = css({
		width: arrowSize * 2,
		height: arrowSize * 2,
		position: 'absolute',
		transform: 'rotate(45deg)',
		border: '1px solid transparent',
		zIndex: zIndex,
		top: popperPosition?.arrowTop,
		left: popperPosition?.arrowLeft
	});

	function calculatePlacement(props) {
		if (!reference || !element) return;

		const { position } = props;
		const referenceData = reference.getBoundingClientRect();

		// take into consideration the page scroll
		const referenceTop = referenceData.top + window.scrollY;
		const referenceBottom = referenceData.bottom + window.scrollY;
		const referenceLeft = referenceData.x + window.scrollX;

		let top = referenceData.bottom;
		let left = referenceLeft;
		let arrowTop = -1 * arrowSize - 1;
		let arrowLeft = arrowSize + arrowDistance;

		const positionPlacement = `${position}-${placement}`;
		switch (positionPlacement) {
			case 'top-start':
				left = referenceLeft;
				top = referenceTop - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize - 1;
				break;
			case 'top-center':
				left = referenceLeft + referenceData.width / 2 - element.clientWidth / 2;
				top = referenceTop - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize - 1;
				arrowLeft = element.clientWidth / 2 - arrowSize;
				break;
			case 'top-end':
				left = referenceLeft + referenceData.width - element.clientWidth;
				top = referenceTop - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize - 1;
				arrowLeft = element.clientWidth - arrowSize * 4 - arrowDistance;
				break;
			case 'bottom-start':
				left = referenceLeft;
				top = referenceBottom + gutter;
				if (withArrow) top += arrowSize;
				break;
			case 'bottom-center':
				left = referenceLeft + referenceData.width / 2 - element.clientWidth / 2;
				top = referenceBottom + gutter;
				if (withArrow) top += arrowSize;
				arrowLeft = element.clientWidth / 2 - arrowSize;
				break;
			case 'bottom-end':
				left = referenceLeft + referenceData.width - element.clientWidth;
				top = referenceBottom + gutter;
				if (withArrow) top += arrowSize;
				arrowLeft = element.clientWidth - arrowSize * 4 - arrowDistance;
				break;
			case 'left-start':
				left = referenceLeft - element.clientWidth - gutter;
				top = referenceTop;
				if (withArrow) left -= arrowSize;
				arrowTop = arrowSize + arrowDistance;
				arrowLeft = element.clientWidth - arrowSize - 1;
				break;
			case 'left-center':
				left = referenceLeft - element.clientWidth - gutter;
				top = referenceBottom - referenceData.height / 2 - element.clientHeight / 2;
				if (withArrow) left -= arrowSize;
				arrowTop = element.clientHeight / 2 - arrowSize;
				arrowLeft = element.clientWidth - arrowSize - 1;
				break;
			case 'left-end':
				left = referenceLeft - element.clientWidth - gutter;
				top = referenceBottom - element.clientHeight;
				if (withArrow) left -= arrowSize;
				arrowTop = element.clientHeight - arrowSize * 4 - arrowDistance;
				arrowLeft = element.clientWidth - arrowSize - 1;
				break;
			case 'right-start':
				left = referenceLeft + referenceData.width + gutter;
				top = referenceTop;
				if (withArrow) left += arrowSize;
				arrowTop = arrowSize + arrowDistance;
				arrowLeft = -1 * arrowSize - 1;
				break;
			case 'right-center':
				left = referenceLeft + referenceData.width + gutter;
				top = referenceBottom - referenceData.height / 2 - element.clientHeight / 2;
				if (withArrow) left += arrowSize;
				arrowTop = element.clientHeight / 2 - arrowSize;
				arrowLeft = -1 * arrowSize - 1;
				break;
			case 'right-end':
				left = referenceLeft + referenceData.width + gutter;
				top = referenceBottom - element.clientHeight;
				if (withArrow) left += arrowSize;
				arrowTop = element.clientHeight - arrowSize * 4 - arrowDistance;
				arrowLeft = -1 * arrowSize - 1;
				break;
		}

		return {
			top: top,
			bottom: top + element.clientHeight,
			left: left,
			right: left + element.clientWidth,
			arrowTop: arrowTop,
			arrowLeft: arrowLeft
		};
	}

	function adaptHidden() {
		if (!popperPosition) return;

		const windowStartY = window.scrollY;
		const windowEndY = window.scrollY + window.innerHeight;
		const windowStartX = window.scrollX;
		const windowEndX = window.scrollX + window.innerWidth;
		const hiddenUp = (originalPopperPosition || popperPosition).bottom > windowEndY;
		const hiddenDown = (originalPopperPosition || popperPosition).top < windowStartY;
		const hiddenLeft = (originalPopperPosition || popperPosition).right > windowEndX;
		const hiddenRight = (originalPopperPosition || popperPosition).left < windowStartX;

		const hidden = hiddenUp || hiddenDown || hiddenLeft || hiddenRight;

		// reset to the original position if the popper already fits
		// inside the page viewport
		if (!hidden) {
			originalPopperPosition = null;
			return calculatePlacement({ ...$$props });
		}

		// if the popper position is outside the page viewport, save
		// the original position so that later it can check if its
		// already safe to return to it
		if (hidden && !originalPopperPosition) {
			originalPopperPosition = popperPosition;
		}

		// adapt the popper position so that it becomes visible when
		// the page scrolls and hides it in its original position
		if (hiddenUp) {
			return calculatePlacement({ ...$$props, element: element, position: 'top' });
		}
		if (hiddenDown) {
			return calculatePlacement({ ...$$props, element: element, position: 'bottom' });
		}
		if (hiddenLeft) {
			return calculatePlacement({ ...$$props, element: element, position: 'left' });
		}
		if (hiddenRight) {
			return calculatePlacement({ ...$$props, element: element, position: 'right' });
		}
	}

	function updatePopper() {
		popperPosition = calculatePlacement({ ...$$props });
		popperPosition = adaptHidden();
	}

	function onResize() {
		updatePopper();
	}

	function onScroll() {
		updatePopper();
	}

	$: {
		// resets a previous popper positioning if an update
		// to adapt to the position was made (popper outside
		// viewport) and then updates the popper position
		originalPopperPosition = null;
		popperPosition = calculatePlacement({ ...$$props });
		popperPosition = adaptHidden();
	}

	const noop = () => {
		if (position) {
			return;
		}
	};
	noop();
</script>

<svelte:window on:resize={onResize} on:scroll={onScroll} />

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
		class="{PopperStyles({ css: override })} {className}"
		in:transition={{ duration: transitionDuration }}
		out:exitTransition={{ duration: exitTransitionDuration }}
	>
		<div class="arrow-wrapper">
			{#if withArrow}
				<div class="arrow {arrowClassName} {ArrowStyles({ css: arrowOverride })}" />
			{/if}
		</div>
		<slot />
	</div>
{/if}

<style>
	.arrow-wrapper {
		position: relative;
	}
</style>
