<script lang="ts">
	import { getContext } from 'svelte';
	import useStyles from './Col.styles';
	import { Box } from '../../Box';
	import type { SvelteUINumberSize } from '$lib/styles';
	import type { ColProps as $$ColProps } from './Col.styles';
	import type { Writable } from 'svelte/store';

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
	const state: Writable<{ cols: number; grow: boolean; spacing: SvelteUINumberSize }> =
		getContext('grid');

	function isSpanValid(span: number) {
		return typeof span === 'number' && span > 0 && span % 1 === 0;
	}

	$: _span = span || $state.cols || 0;
	$: valid = isSpanValid(_span) && _span <= $state.cols;

	$: ({ cx, getStyles } = useStyles({
		cols: $state.cols,
		grow: $state.grow,
		spacing: $state.spacing,
		span: _span,
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
