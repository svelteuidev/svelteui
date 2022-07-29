<script lang="ts">
	import useStyles from './Tooltip.styles';
	import { createEventDispatcher, onMount } from 'svelte';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import type { CSS } from '$lib/styles';
	import type { TooltipProps as $$TooltipProps } from './Tooltip.styles';

  interface $$Props extends $$TooltipProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		label: $$Props['label'] = null,
		opened: $$Props['opened'] = null,
		openDelay: $$Props['openDelay'] = 0,
		closeDelay: $$Props['closeDelay'] = 0,
		color: $$Props['color'] = 'gray',
		radius: $$Props['radius'] = 'sm',
		disabled: $$Props['disabled'] = false,
		arrowSize: $$Props['arrowSize'] = 2,
		width: $$Props['width'] = 'auto',
		wrapLines: $$Props['wrapLines'] = false,
		allowPointerEvents: $$Props['allowPointerEvents'] = false,
		tooltipRef: $$Props['tooltipRef'] = null,
		tooltipId: $$Props['tooltipId'] = null,
		/** --------PopperProps--------------------------------------- */
		zIndex: $$Props['zIndex'] = 300,
		position: $$Props['position'] = 'top',
		placement: $$Props['placement'] = 'center',
		gutter: $$Props['gutter'] = 5,
		withArrow: $$Props['withArrow'] = false,
		transitionOptions: $$Props['transitionOptions'] = { duration: 100 };
	export { className as class };

  const dispatch = createEventDispatcher();

	let openTimeoutRef: number, closeTimeoutRef: number;
	let _opened = false;
	let tooltipRefElement = null;

	const handleOpen = (event) => {
		window.clearTimeout(closeTimeoutRef);

		if (openDelay !== 0) {
			openTimeoutRef = window.setTimeout(() => {
				_opened = true;
			}, openDelay);
		} else {
			_opened = true;
		}
    dispatch('mouseenter', event);
	};

	const handleClose = (event) => {
		window.clearTimeout(openTimeoutRef);

		if (closeDelay !== 0) {
			closeTimeoutRef = window.setTimeout(() => {
				_opened = false;
			}, closeDelay);
		} else {
			_opened = false;
		}
    dispatch('mouseleave', event);
	};

	onMount(() => {
		window.clearTimeout(openTimeoutRef);
		window.clearTimeout(closeTimeoutRef);
	});

	$: visible = (typeof opened === 'boolean' ? opened : _opened) && !disabled;
	$: ({ cx, classes, getStyles } = useStyles({ color, radius }));
</script>

<Box
	bind:element
	on:pointerenter={(event) => handleOpen(event)}
	on:pointerleave={(event) => handleClose(event)}
	on:focus!capture={handleOpen}
	on:blur!capture={handleClose}
	class={cx(className, getStyles({ css: override }))}
	{use}
	id={tooltipId}
	{...$$restProps}
>
	<Popper
		{transitionOptions}
		{position}
		{placement}
		{gutter}
		{withArrow}
		{arrowSize}
		{zIndex}
		reference={tooltipRefElement}
		mounted={visible}
		arrowDistance={3}
	>
		<Box
			bind:this={tooltipRef}
			class={classes.body}
			css={{
				pointerEvents: allowPointerEvents ? 'all' : 'none',
				whiteSpace: wrapLines ? 'normal' : 'nowrap',
				width
			}}
		>
			{#if typeof label === 'function'}
				<svelte:component this={label} />
			{:else if typeof label === 'string'}
				{label}
			{:else if typeof label === 'number'}
				{label}
			{:else if $$slots.label}
				<slot name="label" />
			{:else}
				{label}
			{/if}
		</Box>
	</Popper>
	<span bind:this={tooltipRefElement}>
		<slot />
	</span>
</Box>
