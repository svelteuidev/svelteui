<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { Box } from '../Box';
	import type { CollapseProps } from './Collapse';

	let {
		use = [],
		element = $bindable(null),
		class: className = '',
		override = {},
		open,
		animateOpacity = true,
		transitionDuration = 200,
		slideTransitionOptions = { duration: transitionDuration },
		children,
		...rest
	}: CollapseProps = $props();
</script>

<Box class={className} bind:element css={override} {use} {...rest}>
	{#if open}
		{#if animateOpacity}
			<div transition:fade|global={{ duration: transitionDuration }}>
				<div transition:slide|global={slideTransitionOptions}>
					{@render children?.()}
				</div>
			</div>
		{:else}
			<div transition:slide|global={slideTransitionOptions}>
				{@render children?.()}
			</div>
		{/if}
	{/if}
</Box>
