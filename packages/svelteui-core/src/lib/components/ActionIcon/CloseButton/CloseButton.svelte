<script lang="ts">
	import ActionIcon from '../ActionIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { CloseButtonProps as $$CloseButtonProps } from '../ActionIcon.styles';

	/** Used for forwarding actions from component */
	export let use: $$CloseButtonProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$CloseButtonProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$CloseButtonProps['className'] = '';
	export { className as class };
	/** Override prop for custom theming the component */
	export let override: $$CloseButtonProps['override'] = {};
	/** Controls the size of the icon */
	export let iconSize: $$CloseButtonProps['iconSize'] = 'md';
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$CloseButtonProps['root'] = 'button';
	/** Button color from theme'yellow' | 'orange';} */
	export let color: $$CloseButtonProps['color'] = 'gray';
	/** Controls button appearance */
	export let variant: $$CloseButtonProps['variant'] = 'hover';
	/** Predefined button size */
	export let size: $$CloseButtonProps['size'] = 'md';
	/** Button border-radius from theme or number to set border-radius in px */
	export let radius: $$CloseButtonProps['radius'] = 'sm';
	/** Props passed to Loader component */
	export let loaderProps: $$CloseButtonProps['loaderProps'] = {
		size: 'xs',
		color: 'gray',
		variant: 'circle'
	};
	/** loading will set button to loading state */
	export let loading: $$CloseButtonProps['loading'] = false;
	/** disabled will set button to disabled state */
	export let disabled: $$CloseButtonProps['disabled'] = false;
	/** Applies an href to the button component and converts it to an anchor tag */
	export let href: $$CloseButtonProps['href'] = '';
	/** If external is set to true, target = _blank */
	export let external: $$CloseButtonProps['external'] = false;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	const iconSizes = {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	};
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

CloseButton is a premade ActionIcon with close icon

@see https://svelteui.org/core/action-icon
@example
    ```tsx
    <CloseButton /> // standard CloseButton
    ```
-->

<ActionIcon
	bind:element
	{use}
	{className}
	{override}
	{root}
	{color}
	{variant}
	{size}
	{radius}
	{loaderProps}
	{loading}
	{disabled}
	{href}
	{external}
>
	<CloseIcon width={iconSizes[iconSize]} height={iconSizes[iconSize]} />
</ActionIcon>
