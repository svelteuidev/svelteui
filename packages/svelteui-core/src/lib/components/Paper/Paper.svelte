<script lang="ts">
	import { theme, dark } from '$lib/styles';
	import { Box } from '../Box';
	import type { CSS } from '$lib/styles';
	import type { PaperProps as $$PaperProps } from './Paper.styles';

	/** Used for forwarding actions from component */
	export let use: $$PaperProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$PaperProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$PaperProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let override: $$PaperProps['override'] = {};
	/** Predefined box-shadow from theme.shadows (xs, sm, md, lg, xl) or any valid css box-shadow property */
	export let shadow: $$PaperProps['shadow'] = 'xs';
	/** Predefined border-radius value from theme.radius or number for border-radius in px */
	export let radius: $$PaperProps['radius'] = 'sm';
	/** Adds 1px border with theme.colors.gray[2] color in light color scheme and theme.colors.dark[6] in dark color scheme */
	export let withBorder: $$PaperProps['withBorder'] = false;

	let PaperStyles: CSS;
	$: PaperStyles = {
		[`${dark.selector} &`]: {
			bc: theme.colors['dark700'].value,
			color: theme.colors['dark50'].value,
			border: withBorder ? `1px solid ${theme.colors['dark600'].value}` : undefined
		},
		outline: 0,
		WebkitTapHighlightColor: 'transparent',
		display: 'block',
		textDecoration: 'none',
		color: 'black',
		backgroundColor: 'white',
		boxSizing: 'border-box',
		borderRadius: `$${radius}`,
		boxShadow: theme.shadows[shadow].value || shadow || 'none',
		border: withBorder ? `1px solid ${theme.colors['gray200'].value}` : undefined
	};
</script>

<Box bind:element class={className} css={{ ...PaperStyles, ...override }} {use} {...$$restProps}>
	<slot />
</Box>
