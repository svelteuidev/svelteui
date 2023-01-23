<script lang="ts">
	import ActionIcon from '../ActionIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { CloseButtonProps as $$CloseButtonProps } from './CloseButton';

	interface $$Props extends $$CloseButtonProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		iconSize: $$Props['iconSize'] = 'md',
		root: $$Props['root'] = 'button',
		color: $$Props['color'] = 'gray',
		variant: $$Props['variant'] = 'hover',
		size: $$Props['size'] = 'md',
		radius: $$Props['radius'] = 'sm',
		loaderProps: $$Props['loaderProps'] = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading: $$Props['loading'] = false,
		disabled: $$Props['disabled'] = false,
		href: $$Props['href'] = '',
		external: $$Props['external'] = false;
	export { className as class };

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

CloseButton is a premade ActionIcon with close icon

@see https://svelteui.org/core/action-icon
@example
    ```tsx
    <CloseButton /> // standard CloseButton
    ```
-->

<ActionIcon
	bind:element
	class={className}
	use={[forwardEvents, [useActions, use]]}
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
	{...$$restProps}
>
	<CloseIcon width={iconSizes[iconSize]} height={iconSizes[iconSize]} />
</ActionIcon>
