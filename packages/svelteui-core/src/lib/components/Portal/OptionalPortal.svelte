<script lang="ts">
	import Portal from './Portal.svelte';
	import type { OptionalPortalProps as $$OptionalPortalProps } from './Portal.styles';

	export let withinPortal: $$OptionalPortalProps['withinPortal'] = true,
		use: $$OptionalPortalProps['use'] = [],
		element: $$OptionalPortalProps['element'] = undefined,
		className: $$OptionalPortalProps['className'] = '',
		target: $$OptionalPortalProps['target'] = 'body';
	export { className as class };
</script>

{#if withinPortal}
	<Portal bind:element class={className} {use} {target}>
		<slot />
	</Portal>
{:else}
	<slot />
{/if}
