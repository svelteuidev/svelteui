<script lang="ts" module>
	export const ctx = 'Grid';
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	import useStyles from './Grid.styles';
	import { Box } from '../Box';
	import type { GridProps, GridContext } from './Grid';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		align = 'stretch',
		cols = 12,
		grow = false,
		spacing = 'md',
		justify = 'flex-start',
		children,
		...rest
	}: GridProps = $props();

	const contextStore: GridContext = $derived({ cols, grow, spacing });
	setContext(ctx, () => contextStore);

	let { cx, classes } = $derived(
		useStyles({ align, spacing, justify }, { override, name: 'Grid' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
