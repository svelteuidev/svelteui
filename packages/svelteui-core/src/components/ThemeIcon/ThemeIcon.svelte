<script lang="ts">
	import Box from '../Box/Box.svelte';
	import useStyles from './ThemeIcon.styles';
	import { sizes } from './ThemeIcon.styles';
	import type { ThemeIconProps } from './ThemeIcon';

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
	}: ThemeIconProps = $props();

	let iconSize = $derived(typeof size === 'number' ? `${size}px` : (sizes[size] ?? sizes.md));
	let { cx, classes, getStyles } = $derived(
		useStyles({ color, gradient, iconSize, radius, variant }, { name: 'ThemeIcon' })
	);
</script>

<Box
	bind:element
	{use}
	class={cx(className, classes.root, getStyles({ css: override, variation: variant }))}
	{...rest}
>
	{@render children?.()}
</Box>
