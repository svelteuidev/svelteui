<script lang="ts">
	import { get_current_component } from 'svelte/internal';
	import { useActions, createEventForwarder } from '$lib/internal';
	import type { FragmentProps as $$FragmentProps } from './Fragment.styles';

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Used for forwarding actions from component */
	export let use: $$FragmentProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$FragmentProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$FragmentProps['className'] = '';
	export { className as class };
	export let root: $$FragmentProps['root'] = null;
</script>

<!--
@component
Fragments let you group a list of children without adding extra nodes to the DOM.
	
@see https://svelteui.org/core/fragment
@example
    ```svelte
	<Fragment>
		<div>Child 1</div>
		<div>Child 2</div>
		<div>Child 3</div>
	</Fragment>
    ```
-->
{#if root}
	<!-- prettier-ignore -->
	<svelte:element
		this={root}
		use:useActions={use}
		use:forwardEvents
		bind:this={element}
		class={className}
		{...$$restProps}
	>
		<slot />
	</svelte:element>
{:else}
	<slot {...$$restProps} />
{/if}
