<script lang="ts" context="module">
	export const ctx = 'Grid';
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import useStyles from './Grid.styles';
	import { Box } from '../Box';
	import type { GridProps as $$GridProps, GridContext } from './Grid';

	interface $$Props extends $$GridProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		align: $$Props['align'] = 'stretch',
		cols: $$Props['cols'] = 12,
		grow: $$Props['grow'] = false,
		spacing: $$Props['spacing'] = 'md',
		justify: $$Props['justify'] = 'flex-start';
	export { className as class };

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: GridContext = writable({ cols, grow, spacing });
	setContext(ctx, contextStore);

	$: $contextStore = { cols, grow, spacing };
	$: ({ cx, classes } = useStyles({ align, spacing, justify }, { override }));
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
