<script lang="ts">
	import { Box } from '../Box';
	import { getSortedBreakpoints, size, theme } from './get-sorted-breakpoints';
	import useStyles from './SimpleGrid.styles';
	import type { SimpleGridProps as $$SimpleGridProps } from './SimpleGrid';

	interface $$Props extends $$SimpleGridProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		breakpoints: $$Props['breakpoints'] = [],
		cols: $$Props['cols'] = 1,
		spacing: $$Props['spacing'] = 'md';
	export { className as class };

	$: gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
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
	}, {});

	$: ({ cx, getStyles } = useStyles({ cols, spacing, gridBreakpoints }, { name: "SimpleGrid" }));
</script>

<!--
@component

Responsive grid where each item takes equal amount of space

@see https://svelteui.org/core/input
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
<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
	<slot />
</Box>
