<script lang="ts">
	import { portal } from '@svelteuidev/composables';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { PortalProps as $$PortalProps } from './Portal.styles';

	interface $$Props extends $$PortalProps {}

	export let use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		target: $$Props['target'] = 'body',
		position: $$Props['position'] = 'relative',
		zIndex: $$Props['zIndex'] = 1;
	export { className as class };

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
	<slot />
</div>
