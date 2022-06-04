<script lang="ts">
	import useStyles from './Skeleton.styles';
	import { Box } from '../Box';
	import type { SkeletonProps as $$SkeletonProps } from './Skeleton.styles';

	export let use: $$SkeletonProps['use'] = [],
		element: $$SkeletonProps['element'] = undefined,
		className: $$SkeletonProps['className'] = '',
		override: $$SkeletonProps['override'] = {},
		visible: $$SkeletonProps['visible'] = true,
		height: $$SkeletonProps['height'] = 'auto',
		width: $$SkeletonProps['width'] = 100,
		circle: $$SkeletonProps['circle'] = null,
		radius: $$SkeletonProps['radius'] = null,
		animate: $$SkeletonProps['animate'] = true;
	export { className as class };

	$: ({ cx, getStyles } = useStyles({ animate, circle, height, radius, width }));
</script>

<Box
	bind:element
	class={cx(className, { visible }, getStyles({ css: override }))}
	{use}
	{...$$restProps}
>
	<slot />
</Box>
