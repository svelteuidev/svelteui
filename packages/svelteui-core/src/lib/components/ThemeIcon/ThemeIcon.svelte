<script lang="ts">
	import useStyles from './ThemeIcon.styles';
	import { sizes } from './ThemeIcon.styles';
	import Box from '../Box/Box.svelte';
	import type { ThemeIconProps as $$ThemeIconProps } from './ThemeIcon.styles';

	export let use: $$ThemeIconProps['use'] = [],
		element: $$ThemeIconProps['element'] = undefined,
		className: $$ThemeIconProps['className'] = '',
		override: $$ThemeIconProps['override'] = {},
		size: $$ThemeIconProps['size'] = 'md',
		radius: $$ThemeIconProps['radius'] = 'sm',
		color: $$ThemeIconProps['color'] = 'blue',
		variant: $$ThemeIconProps['variant'] = 'filled',
		gradient: $$ThemeIconProps['gradient'] = { from: 'blue', to: 'cyan', deg: 45 };
	export { className as class };

	$: iconSize = typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md;
	$: ({ cx, getStyles } = useStyles({ color, gradient, iconSize, radius, variant }));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Render icon inside element with theme colors
	
@see https://svelteui.org/core/theme-icon
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
<Box
	bind:element
	{use}
	class={cx(className, getStyles({ css: override, variation: variant }))}
	{...$$restProps}
>
	<slot />
</Box>
