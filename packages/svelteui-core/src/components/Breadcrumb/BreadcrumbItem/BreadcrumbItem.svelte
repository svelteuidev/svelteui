<script lang="ts">
	import useStyles from './BreadcrumbItem.styles';
	import { Box } from '../../Box';
	import { randomID } from '$lib/styles';
	import type { BreadcrumbItemProps as $$BreadcrumbItemProps } from './BreadcrumbItem';
	import type { BreadcrumbContext } from '../Breadcrumb';
	import { getContext } from 'svelte';
	import { ctx } from '../Breadcrumb.svelte';

	interface $$Props extends $$BreadcrumbItemProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		color: $$Props['color'] = undefined,
		href: $$Props['href'] = undefined,
		size: $$Props['size'] = 'md',
		active: $$Props['active'] = false;

	export { className as class };

	// retrieves the reactive context so that TimelineItem has access
	// to the Timeline parameters
	const state: BreadcrumbContext = getContext(ctx);

	let separetor = $state.separetor;
	size = $state.size;
	color = $state.color;

	$: ({ cx, classes, getStyles, theme } = useStyles({ color, size }, { name: 'Progress' }));
</script>

<Box bind:element {use} class={cx(className, getStyles({ css: override }))}>
	{#if href}
		<div
			class={cx('wrapper', {
				active: active
			})}
		>
			<a {href}> <slot name="icon" class="icon" /><span class="innerText"><slot /></span></a>
			{#if !active}
				<span class="separetor">{separetor}</span>
			{/if}
		</div>
	{:else}
		<div
			class={cx('wrapper', {
				active: active
			})}
		>
			<slot name="icon" class="icon" /><span class="innerText"><slot /></span>
			{#if !active}
				<span class="separetor">{separetor}</span>
			{/if}
		</div>
	{/if}
</Box>

<style>
	.separetor {
		margin: 0 8px;
	}
</style>
