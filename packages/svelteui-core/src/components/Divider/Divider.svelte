<script lang="ts">
	import Box from '../Box/Box.svelte';
	import Text from '../Text/Text.svelte';
	import useStyles from './Divider.styles';
	import type { DividerProps } from './Divider';

	let {
		use = [],
		element = $bindable(undefined),
		className = '',
		override = {},
		color = 'gray',
		orientation = 'horizontal',
		size = 'xs',
		labelText = null,
		labelPosition = 'left',
		labelProps = null,
		variant = 'solid',
		label,
		children,
		...rest
	}: DividerProps = $props();

	let showsLabel = $derived(!!(label || labelText) && orientation === 'horizontal');
	let isVertical = $derived(orientation === 'vertical');
	let isHorizontal = $derived(orientation === 'horizontal');

	let { cx, classes, getStyles } = $derived(
		useStyles({ color, size, variant }, { name: 'Divider' })
	);
</script>

<Box
	bind:element
	{use}
	class={cx(
		className,
		classes.root,
		isHorizontal ? classes.horizontal : {},
		isVertical ? classes.vertical : {},
		showsLabel ? classes.showsLabel : {},
		getStyles({ css: override })
	)}
	{...rest}
>
	{@render label?.()}

	{#if showsLabel && !label}
		<Text class={cx(classes.label, labelPosition)} {...labelProps} size={labelProps?.size || size}>
			{labelText}
		</Text>
	{/if}
</Box>
