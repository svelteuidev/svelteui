<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { createEventForwarder } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { Box } from '../Box';
	import type { CollapseProps as $$CollapseProps } from './Collapse';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		override?: $$Props['override'];
		open: $$Props['open'];
		animateOpacity?: $$Props['animateOpacity'];
		transitionDuration?: $$Props['transitionDuration'];
		slideTransitionOptions?: $$Props['slideTransitionOptions'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		override = {},
		open,
		animateOpacity = true,
		transitionDuration = 200,
		slideTransitionOptions = { duration: transitionDuration },
		children,
		...rest
	}: Props = $props();
	

	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!--
@component

A section that collapses with animation, occupying no space on the page.

@see https://svelteui.dev/core/collapse
@example
    ```svelte
    <Collapse open>Content that collapses</Collapse>
    ```
-->
<Box class={className} bind:element css={override} {use} {...rest}>
	{#if open}
		{#if animateOpacity}
			<div transition:fade|global={{ duration: transitionDuration }}>
				<div transition:slide|global={slideTransitionOptions} use:forwardEvents>
					{@render children?.()}
				</div>
			</div>
		{:else}
			<div transition:slide|global={slideTransitionOptions} use:forwardEvents>
				{@render children?.()}
			</div>
		{/if}
	{/if}
</Box>
