<script lang="ts">
	import useStyles from './Flex.styles';
	import Box from '../Box/Box.svelte';
	import type { FlexProps } from './Flex';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		gap = undefined,
		rowGap = undefined,
		columnGap = undefined,
		align = undefined,
		justify = undefined,
		wrap = undefined,
		direction = undefined,
		children,
		...rest
	}: FlexProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				gap,
				rowGap,
				columnGap,
				align,
				justify,
				wrap,
				direction
			},
			{ name: 'Flex' }
		)
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
