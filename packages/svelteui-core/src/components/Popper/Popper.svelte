<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	import { onDestroy } from 'svelte';
	import { arrow, autoUpdate, computePosition, offset, flip, shift } from '@floating-ui/dom';
	import type { Placement } from '@floating-ui/dom';

	import { getTransition, useActions } from '$lib/internal';
	import useStyles from './Popper.styles';
	import { calculateArrowPlacement } from './Popper.styles';
	import type { PopperProps } from './Popper';

	let { element = $bindable(undefined), ...restProps }: PopperProps = $props();
	let {
		use = [],
		className = '',
		override = {},
		position = 'top',
		placement = 'center',
		gutter = 5,
		arrowSize = 3,
		arrowDistance = 3,
		arrowClassName = 'arrow',
		withArrow = false,
		zIndex = 1,
		transition = 'fade',
		transitionOptions = { duration: 100 },
		exitTransition = transition,
		exitTransitionOptions = transitionOptions,
		mounted = false,
		reference = null,
		children,
		...rest
	} = restProps;

	let cleanup = () => {};
	let arrowElement: HTMLElement = $state(undefined);

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

	$effect.pre(() => {
		// setup the auto update once the element and reference are mounted
		// so that udpates to the popper are made when the parent elements
		// are resized, scroll, etc
		if (element && reference) {
			cleanup = autoUpdate(reference, element, () => {
				updatePopper(restProps);
			});
		}
	});

	$effect.pre(() => updatePopper(restProps));

	let _transition = $derived(getTransition(transition) as any);
	let _exitTransition = $derived(getTransition(exitTransition) as any);
	let { cx, classes, getStyles } = $derived(useStyles({ arrowSize, zIndex }, { name: 'Popper' }));
</script>

{#if mounted}
	<div
		bind:this={element}
		use:useActions={use}
		class={cx(className, classes.root, getStyles({ css: override }))}
		in:_transition|global={transitionOptions}
		out:_exitTransition|global={exitTransitionOptions}
		{...rest}
	>
		{#if withArrow}
			<div
				class={cx(arrowClassName, { arrowClassName: true }, classes.arrowStyles)}
				bind:this={arrowElement}
			></div>
		{/if}
		{@render children?.()}
	</div>
{/if}
