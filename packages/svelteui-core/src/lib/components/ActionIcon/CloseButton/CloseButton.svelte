<script lang="ts">
	import ActionIcon from '../ActionIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import type { CloseButtonProps as $$CloseButtonProps } from '../ActionIcon.styles';

	export let use: $$CloseButtonProps['use'] = [],
		element: $$CloseButtonProps['element'] = undefined,
		className: $$CloseButtonProps['className'] = '',
		override: $$CloseButtonProps['override'] = {},
		iconSize: $$CloseButtonProps['iconSize'] = 'md',
		root: $$CloseButtonProps['root'] = 'button',
		color: $$CloseButtonProps['color'] = 'gray',
		variant: $$CloseButtonProps['variant'] = 'hover',
		size: $$CloseButtonProps['size'] = 'md',
		radius: $$CloseButtonProps['radius'] = 'sm',
		loaderProps: $$CloseButtonProps['loaderProps'] = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading: $$CloseButtonProps['loading'] = false,
		disabled: $$CloseButtonProps['disabled'] = false,
		href: $$CloseButtonProps['href'] = '',
		external: $$CloseButtonProps['external'] = false;
	export { className as class };

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
