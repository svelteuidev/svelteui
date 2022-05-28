<script lang="ts">
	import { dark, fns } from '$lib/styles';
	import { Box } from '../Box';
	import { fade } from './Skeleton.styles';
	import type { CSS } from '$lib/styles';
	import type { SkeletonProps as $$SkeletonProps } from './Skeleton.styles';

	/** Used for forwarding actions from component */
	export let use: $$SkeletonProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$SkeletonProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$SkeletonProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$SkeletonProps['override'] = {};
	/** Should skeleton overlay be displayed */
	export let visible: $$SkeletonProps['visible'] = true;
	/** Skeleton height */
	export let height: $$SkeletonProps['height'] = 'auto';
	/** Skeleton width */
	export let width: $$SkeletonProps['width'] = 100;
	/** If Skeleton is a circle, it's width and border-radius will be equal to height */
	export let circle: $$SkeletonProps['circle'] = null;
	/** Radius from theme.radius or number to set border-radius in px */
	export let radius: $$SkeletonProps['radius'] = null;
	/** Whether to show the animation effect */
	export let animate: $$SkeletonProps['animate'] = true;

	const { themeColor } = fns;
	let SkeletonStyles: CSS;

	$: SkeletonStyles = {
		[`${dark.selector} &`]: {
			'&.visible': {
				'&::before': {
					background: themeColor('dark', 7)
				},

				'&::after': {
					background: themeColor('dark', 4)
				}
			}
		},
		height,
		width: circle ? height : `${width}%`,
		borderRadius: circle ? height : `$${radius}`,
		position: 'relative',
		overflow: 'hidden',

		'&.visible': {
			'&::before': {
				content: '""',
				position: 'absolute',
				background: 'white',
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 10
			},

			'&::after': {
				content: '""',
				position: 'absolute',
				background: themeColor('gray', 3),
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				animation: animate ? `${fade} 1500ms linear infinite` : 'none',
				zIndex: 11
			}
		}
	};
</script>

<Box
	bind:element
	css={{ ...SkeletonStyles, ...override }}
	class="{className} {visible ? 'visible' : null}"
	{use}
	{...$$restProps}
>
	<slot />
</Box>
