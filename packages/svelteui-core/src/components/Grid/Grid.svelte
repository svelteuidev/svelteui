<script lang="ts" module>
	export const ctx = 'Grid';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import useStyles from './Grid.styles';
	import { Box } from '../Box';
	import type { GridProps, GridContext } from './Grid';

	let {
		use = [],
		element = $bindable(undefined),
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

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: GridContext = writable({ cols, grow, spacing });
	setContext(ctx, contextStore);

	$effect(() => {
		$contextStore = { cols, grow, spacing };
	});
	let { cx, classes } = $derived(
		useStyles({ align, spacing, justify }, { override, name: 'Grid' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
