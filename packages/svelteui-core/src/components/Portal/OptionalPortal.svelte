<script lang="ts">
	import Portal from './Portal.svelte';
	import type { OptionalPortalProps as $$OptionalPortalProps } from './OptionalPortal';

	

	interface Props {
		withinPortal?: $$Props['withinPortal'];
		use?: $$Props['use'];
		element?: $$Props['element'];
		class?: $$Props['className'];
		target?: $$Props['target'];
		children?: import('svelte').Snippet;
	}

	let {
		withinPortal = true,
		use = [],
		element = $bindable(undefined),
		class: className = '',
		target = 'body',
		children
	}: Props = $props();
	
</script>

{#if withinPortal}
	<Portal bind:element class={className} {use} {target}>
		{@render children?.()}
	</Portal>
{:else}
	{@render children?.()}
{/if}
