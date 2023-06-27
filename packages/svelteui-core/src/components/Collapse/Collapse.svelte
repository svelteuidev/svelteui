<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import { createEventForwarder } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { Box } from '../Box';
	import type { CollapseProps as $$CollapseProps } from './Collapse';

	interface $$Props extends $$CollapseProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		override: $$Props['override'] = {},
		open: $$Props['open'],
		animateOpacity: $$Props['animateOpacity'] = true,
		transitionDuration: $$Props['transitionDuration'] = 200,
		slideTransitionOptions: $$Props['slideTransitionOptions'] = { duration: transitionDuration };
	export { className as class };

	const forwardEvents = createEventForwarder(get_current_component());
</script>

<!--
@component

A section that collapses with animation, occupying no space on the page.

@see https://svelteui.org/core/collapse
@example
    ```svelte
    <Collapse open>Content that collapses</Collapse>
    ```
-->
<Box class={className} bind:element css={override} {use}>
	{#if open}
		{#if animateOpacity}
			<div transition:fade={{ duration: transitionDuration }}>
				<div transition:slide={slideTransitionOptions} use:forwardEvents>
					<slot />
				</div>
			</div>
		{:else}
			<div transition:slide={slideTransitionOptions} use:forwardEvents>
				<slot />
			</div>
		{/if}
	{/if}
</Box>
