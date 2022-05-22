<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { css } from '$lib/styles';
	import type { PopperProps as $$PopperProps } from './Popper.styles';

	/** Used for forwarding actions from component */
	export let use: $$PopperProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$PopperProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$PopperProps['override'] = {};
	export let position: $$PopperProps['position'] = 'top';
	export let placement: $$PopperProps['placement'] = 'center';
	export let gutter: $$PopperProps['gutter'] = 5;
	export let arrowSize: $$PopperProps['arrowSize'] = 2;
	export let arrowDistance: $$PopperProps['arrowDistance'] = 2;
	export let arrowOverride: $$PopperProps['arrowOverride'] = {};
	export let arrowClassName: $$PopperProps['arrowClassName'] = "";
	export let withArrow: $$PopperProps['withArrow'] = false;
	export let zIndex: $$PopperProps['zIndex'] = 10;
	export let transition: $$PopperProps['transition'] = 'fade'; //@todo: check this
	export let transitionDuration: $$PopperProps['transitionDuration'] = 100; //@todo: check this
	export let exitTransitionDuration: $$PopperProps['exitTransitionDuration'] = transitionDuration; //@todo: check this
	export let transitionTimingFunction: $$PopperProps['transitionTimingFunction'] = 'linear'; //@todo: check this
	export let mounted: $$PopperProps['mounted'] = false; //@todo: check this
	export let dir: $$PopperProps['dir'] = 'ltr'; //@todo: this come later from a global config
	export let reference: $$PopperProps['reference'] = null; //@todo: check this

	let element;
	let popperPosition;

	$: PopperStyles = css({
		position: 'absolute',
        top: popperPosition.top,
        left: popperPosition.left,
		pointerEvents: 'none',
		visibility: 'hidden',
		zIndex: zIndex,

		'&.mounted': {
			visibility: 'visible'
		},
		'& .left': {
			right: dir === 'ltr' ? -arrowSize : 'unset',
			left: dir === 'rtl' ? -arrowSize : 'unset',
			borderLeft: dir === 'ltr' ? 0 : undefined,
			borderRight: dir === 'rtl' ? 0 : undefined,
			borderBottom: 0
		},
		'& .right': {
			left: dir === 'ltr' ? -arrowSize : 'unset',
			right: dir === 'rtl' ? -arrowSize : 'unset',
			borderRight: dir === 'ltr' ? 0 : undefined,
			borderLeft: dir === 'rtl' ? 0 : undefined,
			borderTop: 0
		},
		'& .top': {
			bottom: -arrowSize,
			borderLeft: dir === 'ltr' ? 0 : undefined,
			borderRight: dir === 'rtl' ? 0 : undefined,
			borderTop: 0
		},
		'& .bottom': {
			top: -arrowSize,
			borderRight: dir === 'ltr' ? 0 : undefined,
			borderLeft: dir === 'rtl' ? 0 : undefined,
			borderBottom: 0
		},
		'& .start': {
			top: arrowSize * arrowDistance,
			left: dir === 'ltr' ? arrowSize * arrowDistance : undefined,
			right: dir === 'rtl' ? arrowSize * arrowDistance : undefined
		},
		'& .center': {
			top: `calc(50% - ${arrowSize}px)`,
			left: `calc(50% - ${arrowSize}px)`
		},
		'& .end': {
			bottom: arrowSize * arrowDistance,
			right: dir === 'ltr' ? arrowSize * arrowDistance : undefined,
			left: dir === 'rtl' ? arrowSize * arrowDistance : undefined
		}
	});

	$: ArrowStyles = css({
		width: arrowSize * 2,
		height: arrowSize * 2,
		position: 'absolute',
		transform: 'rotate(45deg)',
		border: '1px solid transparent',
		zIndex: zIndex,
		top: popperPosition.arrowTop,
		left: popperPosition.arrowLeft
	});

	onMount(() => {
		calculatePlacement(reference, position, placement, withArrow, arrowSize);
	});

	function onResize() {
		popperPosition = calculatePlacement(reference, position, placement, withArrow, arrowSize);
	}

	function calculatePlacement(reference, position, placement, withArrow, arrowSize) {
		if (!reference) return { top: 0, left: 0 };
		const referenceData = reference.getBoundingClientRect();

		let top = referenceData.bottom;
		let left = referenceData.x - referenceData.left;
		let arrowTop = -1 * arrowSize;
		let arrowLeft = arrowSize * 2;

		const positionPlacement = `${position}-${placement}`;

		switch(positionPlacement) {
			case "top-start":
				left = referenceData.x;
				top = referenceData.top - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize;
				break;
			case "top-center":
				left = referenceData.x + referenceData.width / 2 - element.clientWidth / 2;
				top = referenceData.top - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize;
				arrowLeft = element.clientWidth / 2 - arrowSize;
				break;
			case "top-end":
				left = referenceData.x + referenceData.width - element.clientWidth;
				top = referenceData.top - element.clientHeight - gutter;
				if (withArrow) top -= arrowSize;
				arrowTop = element.clientHeight - arrowSize;
				arrowLeft = element.clientWidth - arrowSize * 4;
				break;
			case "bottom-start":
				left = referenceData.x;
				top = referenceData.bottom + gutter;
				if (withArrow) top += arrowSize;
				break;
			case "bottom-center":
				left = referenceData.x + referenceData.width / 2 - element.clientWidth / 2;
				top = referenceData.bottom + gutter;
				if (withArrow) top += arrowSize;
				arrowLeft = element.clientWidth / 2 - arrowSize;
				break;
			case "bottom-end":
				left = referenceData.x + referenceData.width - element.clientWidth;
				top = referenceData.bottom + gutter;
				if (withArrow) top += arrowSize;
				arrowLeft = element.clientWidth - arrowSize * 4;
				break;
			case "left-start":
				left = referenceData.x - element.clientWidth - gutter;
				top = referenceData.top;
				if (withArrow) left -= arrowSize;
				arrowTop = arrowSize * 2;
				arrowLeft = element.clientWidth - arrowSize;
				break;
			case "left-center":
				left = referenceData.x - element.clientWidth - gutter;
				top = referenceData.bottom - referenceData.height / 2 - element.clientHeight / 2;
				if (withArrow) left -= arrowSize;
				arrowTop = element.clientHeight / 2 - arrowSize;
				arrowLeft = element.clientWidth - arrowSize;
				break;
			case "left-end":
				left = referenceData.x - element.clientWidth - gutter;
				top = referenceData.bottom - element.clientHeight;
				if (withArrow) left -= arrowSize;
				arrowTop = element.clientHeight - arrowSize * 4;
				arrowLeft = element.clientWidth - arrowSize;
				break;
			case "right-start":
				left = referenceData.x + referenceData.width + gutter;
				top = referenceData.top;
				if (withArrow) left += arrowSize;
				arrowTop = arrowSize * 2;
				arrowLeft = -1 * arrowSize;
				break;
			case "right-center":
				left = referenceData.x + referenceData.width + gutter;
				top = referenceData.bottom - referenceData.height / 2 - element.clientHeight / 2;
				if (withArrow) left += arrowSize;
				arrowTop = element.clientHeight / 2 - arrowSize;
				arrowLeft = -1 * arrowSize;
				break;
			case "right-end":
				left = referenceData.x + referenceData.width + gutter;
				top = referenceData.bottom - element.clientHeight;
				if (withArrow) left += arrowSize;
				arrowTop = element.clientHeight - arrowSize * 4;
				arrowLeft = -1 * arrowSize;
				break;
		}

		return {
			top: top,
			left: left,
			arrowTop: arrowTop,
			arrowLeft: arrowLeft
		}
	}

	$: {
		popperPosition = calculatePlacement(reference, position, placement, withArrow, arrowSize);
	}

	// @TODOS:
	// use transition
	// show gutter
</script>

<svelte:window on:resize={onResize} />

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Overlays given element with div element with any color and opacity
	
@see https://svelteui.org/core/overlay
@example
    ```svelte
	<Box sx={{ height: 100, position: 'relative' }}>
       	<Overlay opacity={0.6} color="#000" blur={2} />
        Overlay with a blur
    </Box>
	<Box sx={{ height: 100, position: 'relative' }}>
       	<Overlay gradient={`linear-gradient(105deg, black 20%, #312f2f 50%, $gray400 100%)`} />
        Overlay with a gradient
    </Box>
    ```
-->

<div
	bind:this={element}
	class="{PopperStyles({ css: override })} {className}"
	class:mounted={mounted}
	transition:fade
>
	<div style="position: relative;">
		{#if withArrow}
			<div class="arrow {arrowClassName} {ArrowStyles({ css: arrowOverride })}" />
		{/if}
	</div>
	<slot />
</div>
