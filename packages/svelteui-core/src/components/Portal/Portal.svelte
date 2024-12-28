<script lang="ts">
	import { useActions } from '$lib/internal';
	import { portal } from '@svelteuidev/composables';
	import type { PortalProps } from './Portal';

	let {
		use = [],
		element = $bindable(undefined),
		class: className = '',
		target = 'body',
		position = 'relative',
		zIndex = 1,
		children,
		...rest
	}: PortalProps = $props();
</script>

<div
	bind:this={element}
	use:useActions={use}
	use:portal={target}
	class={className}
	hidden
	style="position: {position}; zIndex: {zIndex};"
	{...rest}
>
	{@render children?.()}
</div>
