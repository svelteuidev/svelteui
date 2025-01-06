<script lang="ts" module>
	export const ctx = 'Breadcrumbs';
</script>

<script lang="ts">
	import useStyles from './Breadcrumbs.styles';
	import { Box } from '../Box';
	import type { BreadcrumbContext, BreadcrumbProps } from './Breadcrumbs';
	import { setContext } from 'svelte';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		color = 'blue',
		size = 'md',
		separator = '/',
		children
	}: BreadcrumbProps = $props();

	const contextStore: BreadcrumbContext = $derived({
		separator: separator,
		size: size,
		color: color
	});
	setContext(ctx, () => contextStore);

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Breadcrumbs' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))}>
	{@render children?.()}
</Box>
