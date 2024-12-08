<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './Stack.styles';
	import type { StackProps } from './Stack';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		spacing = 'md',
		align = 'stretch',
		justify = 'center',
		children,
		...rest
	}: StackProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ align, justify, spacing }, { name: 'Stack' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
