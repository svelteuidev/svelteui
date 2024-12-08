<script lang="ts">
	import { useActions } from '$lib/internal';

	import { Box } from '../Box';
	import Loader from '../Loader/Loader.svelte';
	import useStyles from './ActionIcon.styles';
	import type { ActionIconProps } from './ActionIcon';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = $bindable({}),
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
		children,
		...rest
	}: ActionIconProps = $props()
	
	let { cx, classes, getStyles } = $derived(useStyles({ color, radius, size }, { name: 'ActionIcon' }));
</script>

<Box
	bind:element
	use={[[useActions, use]]}
	tabindex={0}
	disabled={disabled || loading}
	class={cx(
		className,
		classes.root,
		{ [classes.loading]: loading },
		getStyles({ css: override, variation: variant })
	)}
	target={external ? '_blank' : null}
	rel={external ? 'noreferrer noopener' : null}
	{root}
	{href}
	{...rest}
>
	{#if loading}
		<Loader size={loaderProps.size} color={loaderProps.color} variant={loaderProps.variant} />
	{:else}
		{@render children()}
	{/if}
</Box>
