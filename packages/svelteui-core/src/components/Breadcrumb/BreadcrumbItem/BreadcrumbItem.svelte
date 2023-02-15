<script lang="ts">
	import useStyles from './BreadcrumbItem.styles';
	import { Box } from '../../Box';
	import type { BreadcrumbItemProps as $$BreadcrumbItemProps } from './BreadcrumbItem';
	import type { BreadcrumbContext } from '../Breadcrumb';
	import { getContext } from 'svelte';
	import { ctx } from '../Breadcrumb.svelte';

	interface $$Props extends $$BreadcrumbItemProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {}, 
		href: $$Props['href'] = undefined, 
		active: $$Props['active'] = false;

	export { className as class };

	// retrieves the reactive context so that TimelineItem has access
	// to the Timeline parameters
	const state: BreadcrumbContext = getContext(ctx);

	let separator = $state.separator;
	let size =  $state.size;
	let color = $state.color;

	$: ({ cx, classes, getStyles } = useStyles({ color, size }, { name: 'BreadcrumbItem' }));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))}>
	{#if href}
		<div
			class={cx(classes.wrapper, {
				active: active
			})}
		>
			<a {href}>
				<slot name="icon" class={cx(classes.icon)} /><span class={cx(classes.innerText)}
					><slot /></span
				></a
			>
			{#if !active}
				<span class={cx(classes.separator)}>{separator}</span>
			{/if}
		</div>
	{:else}
		<div
			class={cx(classes.wrapper, {
				active: active
			})}
		>
			<slot name="icon" class={cx(classes.icon)} /><span class={cx(classes.innerText)}
				><slot /></span
			>
			{#if !active}
				<span class={cx(classes.separator)}>{separator}</span>
			{/if}
		</div>
	{/if}
</Box>
