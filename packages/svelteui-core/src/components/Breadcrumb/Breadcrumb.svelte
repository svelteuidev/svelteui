<script lang="ts" context="module">
	export const ctx = 'Breadcrumb';
</script>

<script lang="ts">
	import useStyles from './Breadcrumb.styles';
	import { Box } from '../Box'; 
	import type { BreadcrumbContext, BreadcrumbProps as $$BreadcrumbProps } from './Breadcrumb';
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

	$: ({ cx, classes, getStyles, theme } = useStyles({ color, size }, { name: 'Progress' }));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))}>
	<slot class="breadcrumb-items" />
</Box>
