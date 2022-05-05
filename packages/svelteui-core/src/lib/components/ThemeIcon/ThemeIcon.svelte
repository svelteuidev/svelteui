<script lang="ts">
	import { css } from '$lib/styles';
	import { sizes, getVariantStyles } from './ThemeIcon.styles';
	import Box from '../Box/Box.svelte';
	import type { ThemeIconProps as $$ThemeIconProps } from './ThemeIcon.styles';

	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$ThemeIconProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$ThemeIconProps['override'] = {};
	/** Predefined width and height or number for width and height in px */
	export let size: $$ThemeIconProps['size'] = 'md';
	/** Predefined border-radius from theme.radius or number for border-radius in px */
	export let radius: $$ThemeIconProps['radius'] = 'sm';
	/** Icon color from theme */
	export let color: $$ThemeIconProps['color'] = 'blue';
	/** Controls appearance */
	export let variant: $$ThemeIconProps['variant'] = 'filled';
	/** Controls gradient settings in gradient variant only */
	export let gradient: $$ThemeIconProps['gradient'] = { from: 'blue', to: 'cyan', deg: 45 };

	const iconSize = typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md;

	$: ThemeIconStyles = css({
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		width: iconSize,
		height: iconSize,
		minWidth: iconSize,
		minHeight: iconSize,
		borderRadius: `$${radius}`,
		variants: {
			variation: getVariantStyles(color, variant, gradient)
		}
	});
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Render icon inside element with theme colors
	
@see https://svelteui-docs.vercel.app/docs/core/theme-icon
@example
    ```svelte
    <ThemeIcon>
      <Icon />
    </ThemeIcon>

	<ThemeIcon size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
        <Icon size={20} />
    </ThemeIcon>
    ```
-->
<Box class="{className} {ThemeIconStyles({ css: override, variation: variant })}">
	<slot />
</Box>
