<script lang="ts">
	import useStyles from './Container.styles';
	import Box from '../Box/Box.svelte';
	import type { ContainerProps } from './Container';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		size = 'md',
		fluid = false,
		sizes = {
			xs: 540,
			sm: 720,
			md: 960,
			lg: 1140,
			xl: 1320
		},
		children,
		...rest
	}: ContainerProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ fluid, size, sizes }, { name: 'Container' })
	);
</script>

<Box bind:element {use} class={cx(className, classes.root, getStyles({ css: override }))} {...rest}>
	{@render children?.()}
</Box>
