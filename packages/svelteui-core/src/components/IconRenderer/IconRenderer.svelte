<script lang="ts">
	import type { IconRendererProps as $$IconRendererProps } from './IconRenderer.styles';
	import useStyles from './IconRenderer.styles';

	interface $$Props extends $$IconRendererProps {}

	export let className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		icon: $$Props['icon'] = undefined,
		iconSize: $$Props['iconSize'] = 16,
		iconProps: $$Props['iconProps'] = {};

	$: ({ cx, getStyles, classes } = useStyles({ iconSize }));

	$: if (icon instanceof HTMLElement || icon instanceof SVGElement) {
		icon.classList.add(classes.icon);
	}
</script>

{#if typeof icon === 'function'}
	<svelte:component
		this={icon}
		class={cx(className, getStyles({ css: override }))}
		{...iconProps}
	/>
{:else if icon instanceof HTMLElement || icon instanceof SVGElement}
	<span class={cx(className, getStyles({ css: override }))}>
		{@html icon.outerHTML}
	</span>
{/if}
