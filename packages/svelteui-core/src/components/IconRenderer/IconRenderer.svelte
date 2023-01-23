<script lang="ts">
	import useStyles from './IconRenderer.styles';
	import type { IconRendererProps as $$IconRendererProps } from './IconRenderer';

	interface $$Props extends $$IconRendererProps {}

	export let className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = 16,
		iconProps: $$Props['iconProps'] = {};

	// Verifies if CSR only elements are defined, or else it won't use them
	const requiresShim = typeof HTMLElement === 'undefined' && typeof SVGElement === 'undefined';

	$: ({ cx, getStyles, classes } = useStyles({ iconSize }, { name: "IconRenderer" }));
	$: if (!requiresShim && (icon instanceof HTMLElement || icon instanceof SVGElement)) {
		icon.classList.add(classes.icon);
	}
</script>

{#if typeof icon === 'function'}
	<svelte:component
		this={icon}
		class={cx(className, getStyles({ css: override }))}
		{...iconProps}
	/>
{:else if !requiresShim}
	{#if icon instanceof HTMLElement || icon instanceof SVGElement}
		<span class={cx(className, getStyles({ css: override }))}>
			{@html icon.outerHTML}
		</span>
	{/if}
{/if}
