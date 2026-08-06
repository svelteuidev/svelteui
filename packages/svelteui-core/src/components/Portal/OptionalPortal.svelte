<script lang="ts">
	import Portal from './Portal.svelte';
	import type { OptionalPortalProps } from './OptionalPortal';

	let {
		withinPortal = true,
		use = [],
		element = $bindable(null),
		class: className = '',
		target = 'body',
		children,
		...rest
	}: OptionalPortalProps = $props();
</script>

{#if withinPortal}
	<Portal bind:element class={className} {use} {target} {...rest}>
		{@render children?.()}
	</Portal>
{:else}
	{@render children?.()}
{/if}
