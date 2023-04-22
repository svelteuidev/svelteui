<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './ThemeIcon.styles';
	import { sizes } from './ThemeIcon.styles';
	import type { ThemeIconProps as $$ThemeIconProps } from './ThemeIcon';

	interface $$Props extends $$ThemeIconProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		color: $$Props['color'] = 'blue',
		variant: $$Props['variant'] = 'filled',
		gradient: $$Props['gradient'] = { from: 'blue', to: 'cyan', deg: 45 };
	export { className as class };

	$: iconSize = typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md;
	$: ({ cx, classes, getStyles } = useStyles(
		{ color, gradient, iconSize, radius, variant },
		{ name: 'ThemeIcon' }
	));
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
	class={cx(className, classes.root, getStyles({ css: override, variation: variant }))}
	{...$$restProps}
>
	<slot />
</Box>
