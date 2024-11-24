<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './ThemeIcon.styles';
	import { sizes } from './ThemeIcon.styles';
	import type { ThemeIconProps as $$ThemeIconProps } from './ThemeIcon';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		size?: $$Props['size'];
		radius?: $$Props['radius'];
		color?: $$Props['color'];
		variant?: $$Props['variant'];
		gradient?: $$Props['gradient'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		size = 'md',
		radius = 'sm',
		color = 'blue',
		variant = 'filled',
		gradient = { from: 'blue', to: 'cyan', deg: 45 },
		children,
		...rest
	}: Props = $props();
	

	let iconSize = $derived(typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md);
	let { cx, classes, getStyles } = $derived(useStyles(
		{ color, gradient, iconSize, radius, variant },
		{ name: 'ThemeIcon' }
	));
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Render icon inside element with theme colors

@see https://svelteui.dev/core/theme-icon
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
	{...rest}
>
	{@render children?.()}
</Box>
