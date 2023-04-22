<script lang="ts" context="module">
	export const ctx = 'Breadcrumbs';
</script>

<script lang="ts">
	import useStyles from './Breadcrumbs.styles';
	import { Box } from '../Box';
	import type { BreadcrumbContext, BreadcrumbProps as $$BreadcrumbProps } from './Breadcrumbs';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	interface $$Props extends $$BreadcrumbProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = 'blue',
		size: $$Props['size'] = 'md',
		separator: $$Props['separator'] = '/';
	export { className as class };

	// initialize a 'reactive context' which is basically
	// a store inside the context, so that all children
	// components can react to changes made in props
	const contextStore: BreadcrumbContext = writable({
		separator: separator,
		size: size,
		color: color
	});
	setContext(ctx, contextStore);

	$: ({ cx, classes, getStyles } = useStyles(null, { name: 'Breadcrumbs' }));
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))}>
	<slot />
</Box>
