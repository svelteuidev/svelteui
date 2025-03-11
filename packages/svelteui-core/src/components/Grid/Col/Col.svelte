<script lang="ts">
	import { getContext } from 'svelte';
	import { Box } from '../../Box';
	import { ctx } from '../Grid.svelte';
	import type { GridContext } from '../Grid';
	import useStyles from './Col.styles';
	import type { ColProps } from './Col';

	let {
		use = [],
		element = $bindable(null),
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
	}: ColProps = $props();

	// retrieves the reactive context so that Col has access
	// to the Grid cols, grow and spacing parameters
	const { cols, grow, spacing }: GridContext = $derived.by(getContext(ctx));

	function isSpanValid(span: number) {
		return typeof span === 'number' && span > 0 && span % 1 === 0;
	}

	let _span = $derived(span || cols || 0);
	let valid = $derived(isSpanValid(_span) && _span <= cols);

	let { cx, classes, getStyles } = $derived(
		useStyles(
			{
				span: _span,
				cols: cols,
				grow: grow,
				spacing: spacing,
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
		)
	);
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
