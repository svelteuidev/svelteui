<script lang="ts">
	import { useActions } from '$lib/internal';
	
	import ActionIcon from '../ActionIcon.svelte';
	import CloseIcon from './CloseIcon.svelte';
	import type { CloseButtonProps } from './CloseButton';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		iconSize = 'md',
		root = 'button',
		color = 'gray',
		variant = 'hover',
		size = 'md',
		radius = 'sm',
		loaderProps = {
			size: 'xs',
			color: 'gray',
			variant: 'circle'
		},
		loading = false,
		disabled = false,
		href = '',
		external = false,
		...rest
	}: CloseButtonProps = $props();
	
	const iconSizes = {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24
	};
</script>

<ActionIcon
	bind:element
	class={className}
	use={[[useActions, use]]}
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
	{...rest}
>
	<CloseIcon width={iconSizes[iconSize]} height={iconSizes[iconSize]} />
</ActionIcon>
