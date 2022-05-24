<script lang="ts">
	import Portal from './Portal.svelte';
	import type { OptionalPortalProps as $$OptionalPortalProps } from './Portal.styles';

	/** Determine whether to render in a Portal or not */
	export let withinPortal: $$OptionalPortalProps['withinPortal'] = true;
	/** Used for forwarding actions from component */
	export let use: $$OptionalPortalProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$OptionalPortalProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$OptionalPortalProps['className'] = '';
	export { className as class };
	/** DOM element or CSS selector to be appended to */
	export let target: $$OptionalPortalProps['target'] = 'body';
</script>

{#if withinPortal}
	<Portal bind:element class={className} {use} {target}>
		<slot />
	</Portal>
{:else}
	<slot />
{/if}
