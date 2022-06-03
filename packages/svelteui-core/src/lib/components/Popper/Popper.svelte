<script lang="ts">
	import useStyles from './Popper.styles';
	import { fade } from 'svelte/transition';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
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

	let offsets, popperPosition, originalPopperPosition;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

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

		// calculates all offsets of the parent components and
		// removes them from the positioning of the popper
		const { offsetTop, offsetLeft } = offsets;
		left -= offsetLeft;
		top -= offsetTop;

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

		const { offsetTop, offsetLeft } = offsets;
		const windowStartY = window.scrollY;
		const windowEndY = window.scrollY + window.innerHeight;
		const windowStartX = window.scrollX;
		const windowEndX = window.scrollX + window.innerWidth;
		const hiddenUp = (originalPopperPosition || popperPosition).bottom + offsetTop > windowEndY;
		const hiddenDown = (originalPopperPosition || popperPosition).top + offsetTop < windowStartY;
		const hiddenLeft = (originalPopperPosition || popperPosition).right + offsetLeft > windowEndX;
		const hiddenRight = (originalPopperPosition || popperPosition).left + offsetLeft < windowStartX;

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

	function getOffsets(element) {
		if (!element) return;

		let offsetTop = 0;
		let offsetLeft = 0;
		let parent = element.offsetParent;

		while (parent) {
			offsetTop += parent.offsetTop;
			offsetLeft += parent.offsetLeft;
			parent = parent.offsetParent;
		}

		return {
			offsetTop: offsetTop,
			offsetLeft: offsetLeft
		};
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
		offsets = getOffsets(element);
		popperPosition = calculatePlacement({ ...$$props });
		popperPosition = adaptHidden();
	}

	$: ({ cx, classes, getStyles } = useStyles({ arrowSize, zIndex, popperPosition }));

	const noop = () => position;
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
		class={cx(className, getStyles({ css: override }))}
		in:transition={{ duration: transitionDuration }}
		out:exitTransition={{ duration: exitTransitionDuration }}
	>
		<div class="arrow-wrapper">
			{#if withArrow}
				<div class={cx(arrowClassName, { arrowClassName: true }, classes.arrowStyles)} />
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
