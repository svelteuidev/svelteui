<script lang="ts">
	import { css, theme } from '$lib/styles';
	import { getVariantStyles } from './Badge.styles';
	import Box from '../Box/Box.svelte';
	import type { BadgeProps as $$BadgeProps } from './Badge.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$BadgeProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$BadgeProps['override'] = {};
	export let color: $$BadgeProps['color'] = 'blue';
	export let variant: $$BadgeProps['variant'] = 'light';
	export let gradient: $$BadgeProps['gradient'] = { from: 'blue', to: 'cyan', deg: 45 };
	export let size: $$BadgeProps['size'] = 'md';
	export let radius: $$BadgeProps['radius'] = 'xl';
	export let fullWidth: $$BadgeProps['fullWidth'] = false;

	const BadgeStyles = css({
		'&.leftSection': {
			marginRight: '$3'
		},
		'&.rightSection': {
			marginLeft: '$3'
		},
		variants: {
			variation: getVariantStyles(color, variant)
		}
	});
</script>

<Box class="{className}{BadgeStyles({ css: override, variation: variant })}">
	{#if $$slots.leftSection}
		<span>
			<slot class={''} name="leftSection" />
		</span>
	{/if}
	<slot />
	{#if $$slots.rightSection}
		<span>
			<slot class={''} name="rightSection" />
		</span>
	{/if}
</Box>
