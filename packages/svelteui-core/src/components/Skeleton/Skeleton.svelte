<script lang="ts">
	import { Box } from '../Box';
	import useStyles from './Skeleton.styles';
	import type { SkeletonProps } from './Skeleton';

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
	}: SkeletonProps = $props();

	let { cx, classes, getStyles } = $derived(
		useStyles({ animate, circle, height, radius, width }, { name: 'Skeleton' })
	);
</script>

<Box
	bind:element
	class={cx(className, classes.root, { visible }, getStyles({ css: override }))}
	{use}
	{...rest}
>
	{@render children?.()}
</Box>
