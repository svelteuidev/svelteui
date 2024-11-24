<script lang="ts" module>
	export const ctx = 'Grid';
</script>

<script lang="ts">
	import { run } from 'svelte/legacy';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import useStyles from './Grid.styles';
	import { Box } from '../Box';
	import type { GridProps as $$GridProps, GridContext } from './Grid';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		align?: $$Props['align'];
		cols?: $$Props['cols'];
		grow?: $$Props['grow'];
		spacing?: $$Props['spacing'];
		justify?: $$Props['justify'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

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
	}: Props = $props();
	

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: GridContext = writable({ cols, grow, spacing });
	setContext(ctx, contextStore);

	run(() => {
		$contextStore = { cols, grow, spacing };
	});
	let { cx, classes } = $derived(useStyles({ align, spacing, justify }, { override, name: 'Grid' }));
</script>

<!--
@component

Flexbox grid with variable amount of columns

@see https://svelteui.dev/core/grid
@example
    ```svelte
    <Grid cols={3} align='center'>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
    ```
-->
<Box bind:element {use} class={cx(className, classes.root)} {...rest}>
	{@render children?.()}
</Box>
