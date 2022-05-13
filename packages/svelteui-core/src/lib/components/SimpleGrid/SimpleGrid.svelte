<script lang="ts">
	import { getSortedBreakpoints, size, theme } from './get-sorted-breakpoints';
	import Box from '../Box/Box.svelte';
	import type { SimpleGridProps as $$SimpleGridProps } from './SimpleGrid.styles';

	/** Used for forwarding actions from component */
	export let use: $$SimpleGridProps['use'] = [];
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$SimpleGridProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$SimpleGridProps['override'] = {};
	/** Breakpoints data to change items per row and spacing based on max-width */
	export let breakpoints: $$SimpleGridProps['breakpoints'] = [];
	/** Default amount of columns, used when none of breakpoints can be applied  */
	export let cols: $$SimpleGridProps['cols'] = 1;
	/** Default spacing between columns, used when none of breakpoints can be applied */
	export let spacing: $$SimpleGridProps['spacing'] = 'md';

	const gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
		const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
		const breakpointSize = size({
			size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
			sizes: theme.breakpoints
		});

		acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
			gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
			gap: size({
				size: breakpoint.spacing || spacing,
				sizes: theme.spacing
			})
		};

		return acc;
	}, {});

	$: SimpleGridStyles = {
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
		gap: typeof spacing === 'number' ? `${spacing}px` : `$${spacing}`,
		...gridBreakpoints
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Responsive grid where each item takes equal amount of space
	
@see https://svelteui-docs.vercel.app/docs/core/input
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
<Box {use} css={{ ...SimpleGridStyles, ...override }} class={className}>
	<slot />
</Box>
