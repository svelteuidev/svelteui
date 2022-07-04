<script lang="ts">
	import useStyles from './Col.styles';
	import { Box } from '../../Box';
	import { getContext } from 'svelte';
	import type { GridContext } from '../Grid.styles';
	import type { ColProps as $$ColProps } from './Col.styles';

	export let use: $$ColProps['use'] = [],
		element: $$ColProps['element'] = undefined,
		className: $$ColProps['className'] = '',
		override: $$ColProps['override'] = {},
		span: $$ColProps['span'] = undefined,
		offset: $$ColProps['offset'] = 0,
		offsetXs: $$ColProps['offsetXs'] = 0,
		offsetSm: $$ColProps['offsetSm'] = 0,
		offsetMd: $$ColProps['offsetMd'] = 0,
		offsetLg: $$ColProps['offsetLg'] = 0,
		offsetXl: $$ColProps['offsetXl'] = 0,
		xs: $$ColProps['xs'] = undefined,
		sm: $$ColProps['sm'] = undefined,
		md: $$ColProps['md'] = undefined,
		lg: $$ColProps['lg'] = undefined,
		xl: $$ColProps['xl'] = undefined;
	export { className as class };

	// retrieves the reactive context so that Col has access
	// to the Grid cols, grow and spacing parameters
	const state: GridContext = getContext('grid');
	const { cols, grow, spacing } = $state;

	function isSpanValid(span: number) {
		return typeof span === 'number' && span > 0 && span % 1 === 0;
	}

	$: _span = span || cols || 0;
	$: valid = isSpanValid(_span) && _span <= cols;

	$: ({ cx, getStyles } = useStyles({
		span: _span,
		cols,
		grow,
		spacing,
		offset,
		offsetXs,
		offsetSm,
		offsetMd,
		offsetLg,
		offsetXl,
		xs,
		sm,
		md,
		lg,
		xl
	}));
</script>

{#if valid}
	<Box bind:element {use} class={cx(className, getStyles({ css: override }))} {...$$restProps}>
		<slot />
	</Box>
{/if}
