<script lang="ts">
	import useStyles from './Blockquote.styles';
	import type { BlockquoteProps } from './Blockquote';
	import { Box } from '../Box';
	import QuoteIcon from './QuoteIcon.svelte';
	import { IconRenderer } from '../IconRenderer';

	let {
		element = undefined,
		className = '',
		override = {},
		root = 'blockquote',
		color = 'gray',
		iconComponent = QuoteIcon,
		iconSize = 20,
		icon = undefined,
		citeContent = undefined,
		children,
		...rest
	}: BlockquoteProps = $props();

	let { cx, classes } = $derived(useStyles({ color }, { override, name: 'Blockquote' }));
</script>

<Box bind:element class={cx(className, classes.root)} {root} {...rest}>
	<div class={classes.inner}>
		{#if icon}
			{@render icon()}
		{/if}
		{#if iconComponent}
			<div class={classes.icon}>
				<IconRenderer icon={iconComponent} {iconSize} />
			</div>
		{/if}
		<div class={classes.body}>
			{@render children()}
			{#if citeContent}
				<cite class={classes.cite}>
					{@render citeContent()}
				</cite>
			{/if}
		</div>
	</div>
</Box>
