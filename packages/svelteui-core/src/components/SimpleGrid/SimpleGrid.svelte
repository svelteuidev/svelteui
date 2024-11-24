<script lang="ts">
	import { Box } from '../Box';
	import { getSortedBreakpoints, size, theme } from './get-sorted-breakpoints';
	import useStyles from './SimpleGrid.styles';
	import type { SimpleGridProps as $$SimpleGridProps } from './SimpleGrid';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		breakpoints?: $$Props['breakpoints'];
		cols?: $$Props['cols'];
		spacing?: $$Props['spacing'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		breakpoints = [],
		cols = 1,
		spacing = 'md',
		children,
		...rest
	}: Props = $props();
	

	let gridBreakpoints = $derived(getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
		const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
		const breakpointSize = size({
			size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
			sizes: theme.breakpoints
		});

		acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
			gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
			gap: size({ size: breakpoint.spacing || spacing, sizes: theme.spacing })
		};

		return acc;
	}, {}));

	let { cx, classes, getStyles } = $derived(useStyles(
		{ cols, spacing, gridBreakpoints },
		{ name: 'SimpleGrid' }
	));
</script>

<!--
@component

Responsive grid where each item takes equal amount of space

@see https://svelteui.dev/core/input
@example
    ```svelte
    <SimpleGrid cols={3}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
    ```
-->
<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override }))}
	{...rest}
>
	{@render children?.()}
</Box>
