<script lang="ts">
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { portal } from '@svelteuidev/composables';
	import type { PortalProps as $$PortalProps } from './Portal';

	

	interface Props {
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		target?: $$Props['target'];
		position?: $$Props['position'];
		zIndex?: $$Props['zIndex'];
		children?: import('svelte').Snippet;
	}

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		target = 'body',
		position = 'relative',
		zIndex = 1,
		children
	}: Props = $props();
	

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
</script>

<div
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	use:portal={target}
	class={className}
	hidden
	style="position: {position}; zIndex: {zIndex};"
>
	{@render children?.()}
</div>
