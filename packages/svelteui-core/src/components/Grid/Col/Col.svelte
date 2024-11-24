<script lang="ts">
	import { getContext } from 'svelte';
	import { Box } from '../../Box';
	import type { GridContext } from '../Grid';
	import useStyles from './Col.styles';
	import type { ColProps as $$ColProps } from './Col';

	interface Props {
		use?: $$ColProps['use'];
		element?: $$ColProps['element'];
		class?: $$ColProps['className'];
		override?: $$ColProps['override'];
		span?: $$ColProps['span'];
		offset?: $$ColProps['offset'];
		offsetXs?: $$ColProps['offsetXs'];
		offsetSm?: $$ColProps['offsetSm'];
		offsetMd?: $$ColProps['offsetMd'];
		offsetLg?: $$ColProps['offsetLg'];
		offsetXl?: $$ColProps['offsetXl'];
		xs?: $$ColProps['xs'];
		sm?: $$ColProps['sm'];
		md?: $$ColProps['md'];
		lg?: $$ColProps['lg'];
		xl?: $$ColProps['xl'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		span = undefined,
		offset = 0,
		offsetXs = 0,
		offsetSm = 0,
		offsetMd = 0,
		offsetLg = 0,
		offsetXl = 0,
		xs = undefined,
		sm = undefined,
		md = undefined,
		lg = undefined,
		xl = undefined,
		children,
		...rest
	}: Props = $props();
	

	// retrieves the reactive context so that Col has access
	// to the Grid cols, grow and spacing parameters
	const state: GridContext = getContext('Grid');
	let { cols, grow, spacing } = $derived($state);

	function isSpanValid(span: number) {
		return typeof span === 'number' && span > 0 && span % 1 === 0;
	}

	let _span = $derived(span || cols || 0);
	let valid = $derived(isSpanValid(_span) && _span <= cols);

	let { cx, classes, getStyles } = $derived(useStyles(
		{
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
		},
		{ name: 'Col' }
	));
</script>

{#if valid}
	<Box
		bind:element
		{use}
		class={cx(className, classes.root, getStyles({ css: override }))}
		{...rest}
	>
		{@render children?.()}
	</Box>
{/if}
