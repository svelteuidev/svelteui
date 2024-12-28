<script lang="ts">
	import { useActions } from '$lib/internal';
	import Box from '../Box/Box.svelte';
	import Center from '../Center/Center.svelte';
	import { getDefaultZIndex } from './Overlay.styles';
	import type { OverlayProps } from './Overlay';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		opacity = 0.6,
		color = '#fff',
		blur = 0,
		gradient = '',
		zIndex = getDefaultZIndex('modal'),
		radius = 0,
		center = false,
		children,
		...rest
	}: OverlayProps = $props();

	let background = $derived(gradient ? { backgroundImage: gradient } : { backgroundColor: color });
	let baseStyles = $derived({
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex
	});
</script>

{#if blur}
	<Box
		use={[[useActions, use]]}
		bind:element
		css={{ ...baseStyles, backdropFilter: `blur(${blur}px)` }}
		class={className}
		{...rest}
	>
		<Box css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }} />
	</Box>
{:else}
	<Box
		use={[[useActions, use]]}
		bind:element
		css={{ ...background, ...baseStyles, opacity, borderRadius: `${radius}`, ...override }}
		{...rest}
		class={className}
	>
		{#if center}
			<Center>
				{@render children?.()}
			</Center>
		{:else}
			{@render children?.()}
		{/if}
	</Box>
{/if}
