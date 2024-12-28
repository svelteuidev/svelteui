<script lang="ts">
	import { onMount } from 'svelte';

	import { Box } from '../Box';
	import { Popper } from '../Popper';
	import useStyles from './Tooltip.styles';
	import type { TooltipProps } from './Tooltip';

	let {
		use = [],
		element = $bindable(undefined),
		className = '',
		override = {},
		labelComponent = undefined,
		opened = null,
		openDelay = 0,
		closeDelay = 0,
		color = 'gray',
		radius = 'sm',
		disabled = false,
		arrowSize = 2,
		width = 'auto',
		wrapLines = false,
		allowPointerEvents = false,
		tooltipRef = null,
		tooltipId = null,
		/** --------PopperProps--------------------------------------- */
		zIndex = 300,
		position = 'top',
		placement = 'center',
		gutter = 5,
		withArrow = false,
		transitionOptions = { duration: 100 },
		label,
		children,
		...rest
	}: TooltipProps = $props();

	let openTimeoutRef: number, closeTimeoutRef: number;
	let _opened = false;
	let tooltipRefElement = $state(null);

	const handleOpen = (event) => {
		window.clearTimeout(closeTimeoutRef);

		if (openDelay !== 0) {
			openTimeoutRef = window.setTimeout(() => {
				_opened = true;
			}, openDelay);
		} else {
			_opened = true;
		}
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
	};

	onMount(() => {
		window.clearTimeout(openTimeoutRef);
		window.clearTimeout(closeTimeoutRef);
	});

	let LabelComponent = $derived(typeof labelComponent === 'function' ? labelComponent : undefined);

	let visible = $derived((typeof opened === 'boolean' ? opened : _opened) && !disabled);
	let { cx, classes, getStyles } = $derived(useStyles({ color, radius }, { name: 'Tooltip' }));
</script>

<Box
	bind:element
	onpointerenter={(event) => handleOpen(event)}
	onpointerleave={(event) => handleClose(event)}
	onfocuscapture={handleOpen}
	onblurcapture={handleClose}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{use}
	id={tooltipId}
	{...rest}
>
	<Popper
		{transitionOptions}
		{position}
		{placement}
		{gutter}
		{withArrow}
		{arrowSize}
		{zIndex}
		arrowClassName={classes.arrow}
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
			{#if LabelComponent !== undefined}
				<LabelComponent />
			{:else if typeof labelComponent === 'string'}
				{label}
			{:else if typeof labelComponent === 'number'}
				{label}
			{:else if label}
				{@render label()}
			{/if}
		</Box>
	</Popper>
	<span bind:this={tooltipRefElement}>
		{@render children?.()}
	</span>
</Box>
