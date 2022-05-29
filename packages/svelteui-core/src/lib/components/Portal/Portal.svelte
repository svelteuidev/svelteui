<script lang="ts">
	import { portal } from '@svelteuidev/actions';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { PortalProps as $$PortalProps } from './Portal.styles';

	/** Used for forwarding actions from component */
	export let use: $$PortalProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$PortalProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$PortalProps['className'] = '';
	export { className as class };
	/** DOM element or CSS selector to be appended to */
	export let target: $$PortalProps['target'] = 'body';
	export let position: string = 'relative',
		zIndex: number = 1;

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());
	/** T */
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
	<slot />
</div>
