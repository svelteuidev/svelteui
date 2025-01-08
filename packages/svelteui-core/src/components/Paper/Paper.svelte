<script lang="ts">
	import useStyles from './Paper.styles';
	import { Box } from '../Box';
	import type { PaperProps } from './Paper';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		shadow = 'xs',
		radius = 'sm',
		withBorder = false,
		padding = 'md',
		children,
		...rest
	}: PaperProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ radius, shadow, padding }, { name: 'Paper' })
	);
</script>

<Box
	bind:element
	class={cx(
		classes.root,
		className,
		withBorder && classes.withBorder,
		getStyles({ css: override })
	)}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
