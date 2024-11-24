<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './Skeleton.styles';
	import type { SkeletonProps as $$SkeletonProps } from './Skeleton';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		visible?: $$Props['visible'];
		height?: $$Props['height'];
		width?: $$Props['width'];
		circle?: $$Props['circle'];
		radius?: $$Props['radius'];
		animate?: $$Props['animate'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		visible = true,
		height = 'auto',
		width = 100,
		circle = null,
		radius = null,
		animate = true,
		children,
		...rest
	}: Props = $props();
	

	let { cx, classes, getStyles } = $derived(useStyles(
		{ animate, circle, height, radius, width },
		{ name: 'Skeleton' }
	));
</script>

<Box
	bind:element
	class={cx(className, classes.root, { visible }, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
