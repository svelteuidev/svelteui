<script lang="ts">
	import { theme, dark, fns } from '$lib/styles';
	import { Box } from '../Box';
	import type { CSS } from '$lib/styles';
	import type { KbdProps as $$KbdProps } from './Kbd.styles';

	/** Used for forwarding actions from component */
	export let use: $$KbdProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$KbdProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$KbdProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$KbdProps['override'] = {};

	const { themeColor } = fns;
	let KbdStyles: CSS;

	$: KbdStyles = {
		[`${dark.selector} &`]: {
			bc: themeColor('dark', 4),
			color: themeColor('dark', 0),
			border: `1px solid ${themeColor('dark', 9)}`,
			borderBottom: `3px solid ${themeColor('dark', 9)}`
		},
		lineHeight: theme.lineHeights.md.value,
		fontFamily: theme.fonts.mono.value,
		fontSize: theme.fontSizes.xs.value,
		fontWeight: 700,
		backgroundColor: themeColor('gray', 0),
		color: themeColor('gray', 7),
		padding: `3px ${+theme.space.xs.value / 2}px`,
		borderRadius: theme.radii.sm.value,
		border: `1px solid ${themeColor('gray', 3)}`,
		borderBottom: `3px solid ${themeColor('gray', 3)}`
	};
</script>

<Box
	bind:element
	{use}
	root="kbd"
	class={className}
	css={{ ...KbdStyles, ...override }}
	{...$$restProps}
>
	<slot />
</Box>
