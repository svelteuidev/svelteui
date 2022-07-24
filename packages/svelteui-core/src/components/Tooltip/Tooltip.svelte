<script lang="ts">
	import useStyles from './Tooltip.styles';
	import { onMount } from 'svelte';
	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import type { CSS } from '$lib/styles';
	import type { TooltipProps as $$TooltipProps } from './Tooltip.styles';

	export let use: $$TooltipProps['use'] = [],
		element: $$TooltipProps['element'] = undefined,
		className: $$TooltipProps['className'] = '',
		override: $$TooltipProps['override'] = {},
		label: $$TooltipProps['label'] = null,
		opened: $$TooltipProps['opened'] = null,
		openDelay: $$TooltipProps['openDelay'] = 0,
		closeDelay: $$TooltipProps['closeDelay'] = 0,
		color: $$TooltipProps['color'] = 'gray',
		radius: $$TooltipProps['radius'] = 'sm',
		disabled: $$TooltipProps['disabled'] = false,
		arrowSize: $$TooltipProps['arrowSize'] = 2,
		width: $$TooltipProps['width'] = 'auto',
		wrapLines: $$TooltipProps['wrapLines'] = false,
		allowPointerEvents: $$TooltipProps['allowPointerEvents'] = false,
		tooltipRef: $$TooltipProps['tooltipRef'] = null,
		tooltipId: $$TooltipProps['tooltipId'] = null,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onMouseEnter = (args?: any) => {},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onMouseLeave = (args?: any) => {},
		/** --------PopperProps--------------------------------------- */
		zIndex: $$TooltipProps['zIndex'] = 300,
		position: $$TooltipProps['position'] = 'top',
		placement: $$TooltipProps['placement'] = 'center',
		gutter: $$TooltipProps['gutter'] = 5,
		withArrow: $$TooltipProps['withArrow'] = false,
		transitionDuration: $$TooltipProps['transitionDuration'] = 100;
	export { className as class };

	let openTimeoutRef: number, closeTimeoutRef: number;
	let _opened = false;
	let tooltipRefElement = null;
	let ToolTipStyles: CSS;

	const handleOpen = () => {
		window.clearTimeout(closeTimeoutRef);

		if (openDelay !== 0) {
			openTimeoutRef = window.setTimeout(() => {
				_opened = true;
			}, openDelay);
		} else {
			_opened = true;
		}
	};

	const handleClose = () => {
		window.clearTimeout(openTimeoutRef);

		if (closeDelay !== 0) {
			closeTimeoutRef = window.setTimeout(() => {
				_opened = false;
			}, closeDelay);
		} else {
			_opened = false;
		}
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
	on:pointerenter={(event) => {
		handleOpen();
		typeof onMouseEnter === 'function' && onMouseEnter(event);
	}}
	on:pointerleave={(event) => {
		handleClose();
		typeof onMouseLeave === 'function' && onMouseLeave(event);
	}}
	on:focus!capture={handleOpen}
	on:blur!capture={handleClose}
	class={cx(className, getStyles({ css: override }))}
	{use}
	{tooltipId}
	{...$$restProps}
>
	<Popper
		{transitionDuration}
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
