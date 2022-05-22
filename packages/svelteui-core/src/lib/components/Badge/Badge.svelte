<script lang="ts">
	import { css } from '$lib/styles';
	import { getVariantStyles, sizes } from './Badge.styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import Box from '../Box/Box.svelte';
	import type { BadgeProps as $$BadgeProps } from './Badge.styles';

	/** Used for forwarding actions from component */
	export let use: $$BadgeProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$BadgeProps['element'] = undefined;
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	export let className: $$BadgeProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$BadgeProps['override'] = {};
	export let color: $$BadgeProps['color'] = 'blue';
	export let variant: $$BadgeProps['variant'] = 'light';
	export let gradient: $$BadgeProps['gradient'] = { from: 'blue', to: 'cyan', deg: 45 };
	export let size: $$BadgeProps['size'] = 'md';
	export let radius: $$BadgeProps['radius'] = 'xl';
	export let fullWidth: $$BadgeProps['fullWidth'] = false;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	const { fontSize, height } = size in sizes ? sizes[size] : sizes.md;

	$: BadgeStyles = css({
		focusRing: 'auto',
		fontSize,
		height,
		WebkitTapHighlightColor: 'transparent',
		lineHeight: `${height - 2}px`,
		textDecoration: 'none',
		padding: typeof size === 'number' ? `0 $${size}px` : `0 $${size}`,
		boxSizing: 'border-box',
		display: fullWidth ? 'flex' : 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: fullWidth ? '100%' : 'auto',
		textTransform: 'uppercase',
		borderRadius: `$${radius}`,
		fontWeight: 700,
		letterSpacing: 0.25,
		cursor: 'default',
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		'& .leftSection': {
			marginRight: '$3'
		},
		'& .rightSection': {
			marginLeft: '$3'
		},
		'& .inner': {
			whiteSpace: 'nowrap',
			overflow: 'hidden',
			textOverflow: 'ellipsis'
		},
		variants: {
			variation: getVariantStyles(color, variant, size, gradient)
		}
	});
</script>

<!--
@component
**UNSTABLE:** new API, yet to be vetted.

Display badge, pill or tag
	
@see https://svelteui.org/core/badge
@example
    ```svelte
    <Badge>Badge</Badge>
	<Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Badge>
	<Box css={{ width: 120 }}>
		<Badge variant="filled" fullWidth>Badge with overflow</Badge>
	</Box>
    ```
-->
<Box
	use={[forwardEvents, [useActions, use]]}
	bind:element
	class="{className} {BadgeStyles({ css: override, variation: variant })}"
	{...$$restProps}
>
	{#if $$slots.leftSection}
		<span class="leftSection">
			<slot name="leftSection" />
		</span>
	{/if}
	<span class="inner"><slot /></span>
	{#if $$slots.rightSection}
		<span class="rightSection">
			<slot name="rightSection" />
		</span>
	{/if}
</Box>
