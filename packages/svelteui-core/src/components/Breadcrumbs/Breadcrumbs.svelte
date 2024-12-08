<script lang="ts" module>
	export const ctx = 'Breadcrumbs';
</script>

<script lang="ts">
	import useStyles from './Breadcrumbs.styles';
	import { Box } from '../Box';
	import type { BreadcrumbContext, BreadcrumbProps } from './Breadcrumbs';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

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

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: BreadcrumbContext = writable({
		separator: separator,
		size: size,
		color: color
	});
	setContext(ctx, contextStore);

	let { cx, classes, getStyles } = $derived(useStyles(null, { name: 'Breadcrumbs' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))}>
	{@render children?.()}
</Box>
