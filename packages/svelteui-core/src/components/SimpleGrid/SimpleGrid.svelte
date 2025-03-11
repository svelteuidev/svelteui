<script lang="ts">
	import { Box } from '../Box';
	import { getSortedBreakpoints, size, theme } from './get-sorted-breakpoints';
	import useStyles from './SimpleGrid.styles';
	import type { SimpleGridProps } from './SimpleGrid';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		breakpoints = [],
		cols = 1,
		spacing = 'md',
		children,
		...rest
	}: SimpleGridProps = $props();

	let gridBreakpoints = $derived(
		getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
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
		}, {})
	);

	let { cx, classes, getStyles } = $derived(
		useStyles({ cols, spacing, gridBreakpoints }, { name: 'SimpleGrid' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
