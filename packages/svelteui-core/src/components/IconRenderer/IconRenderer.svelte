<script lang="ts">
	import { run } from 'svelte/legacy';

	import useStyles from './IconRenderer.styles';
	import type { IconRendererProps as $$IconRendererProps } from './IconRenderer';

	

	interface Props {
		className?: $$Props['className'];
		override?: $$Props['override'];
		icon?: $$Props['icon'];
		iconSize?: $$Props['iconSize'];
		iconProps?: $$Props['iconProps'];
	}

	let {
		className = '',
		override = {},
		icon = undefined,
		iconSize = 16,
		iconProps = {}
	}: Props = $props();

	// Verifies if CSR only elements are defined, or else it won't use them
	const requiresShim = typeof HTMLElement === 'undefined' && typeof SVGElement === 'undefined';

	let { cx, getStyles, classes } = $derived(useStyles({ iconSize }, { name: 'IconRenderer' }));
	run(() => {
		if (!requiresShim && (icon instanceof HTMLElement || icon instanceof SVGElement)) {
			icon.classList.add(...classes.icon.split(' '));
		}
	});
</script>

{#if typeof icon === 'function'}
	{@const SvelteComponent = icon}
	<SvelteComponent
		class={cx(className, classes.root, getStyles({ css: override }))}
		{...iconProps}
	/>
{:else if !requiresShim}
	{#if icon instanceof HTMLElement || icon instanceof SVGElement}
		<span class={cx(className, classes.root, getStyles({ css: override }))}>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html icon.outerHTML}
		</span>
	{/if}
{/if}
