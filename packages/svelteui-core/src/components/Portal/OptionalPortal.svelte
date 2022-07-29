<script lang="ts">
	import Portal from './Portal.svelte';
	import type { OptionalPortalProps as $$OptionalPortalProps } from './Portal.styles';

  interface $$Props extends $$OptionalPortalProps {}

	export let withinPortal: $$Props['withinPortal'] = true,
		use: $$Props['use'] = [],
		element: $$Props['element'] = undefined,
		className: $$Props['className'] = '',
		target: $$Props['target'] = 'body';
	export { className as class };
</script>

{#if withinPortal}
	<Portal bind:element class={className} {use} {target}>
		<slot />
	</Portal>
{:else}
	<slot />
{/if}
