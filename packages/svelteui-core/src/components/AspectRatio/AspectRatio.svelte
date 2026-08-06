<script lang="ts">
	import useStyles from './AspectRatio.styles';
	import Box from '../Box/Box.svelte';
	import type { AspectRatioProps } from './AspectRatio';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		ratio = 1,
		children,
		...rest
	}: AspectRatioProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				ratio
			},
			{ name: 'AspectRatio' }
		)
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
