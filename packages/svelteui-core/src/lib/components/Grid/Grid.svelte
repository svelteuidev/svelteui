<script lang="ts" context="module">
	export const ctx = 'Grid';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import useStyles from './Grid.styles';
	import { Box } from '../Box';
	import type { GridProps as $$GridProps } from './Grid.styles';

	export let use: $$GridProps['use'] = [],
		element: $$GridProps['element'] = undefined,
		className: $$GridProps['className'] = '',
		override: $$GridProps['override'] = {},
		align: $$GridProps['align'] = 'stretch',
		cols: $$GridProps['cols'] = 12,
		grow: $$GridProps['grow'] = false,
		spacing: $$GridProps['spacing'] = 'md',
		justify: $$GridProps['justify'] = 'flex-start';
	export { className as class };

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore = writable({ cols, grow, spacing });
	setContext(ctx, contextStore);

	$: $contextStore = { cols, grow, spacing };
	$: ({ cx, classes } = useStyles({ align, cols, grow, spacing, justify }, { override }));
</script>

<!--
@component

Flexbox grid with variable amount of columns
	
@see https://svelteui.org/core/grid
@example
    ```svelte
    <Grid cols={3} align='center'>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
    ```
-->
<Box bind:element {use} class={cx(className, classes.root)} {...$$restProps}>
	<slot />
</Box>
