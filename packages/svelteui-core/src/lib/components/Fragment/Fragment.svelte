<script lang="ts">
	import type { FragmentProps as $$FragmentProps } from './Fragment.styles';

	export let root: $$FragmentProps['root'] = null;
</script>

<!--
@component
Fragments let you group a list of children without adding extra nodes to the DOM.
	
@see https://svelteui-docs.vercel.app/docs/core/fragment
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
	<svelte:element this={root} {...$$restProps}>
		<slot />
	</svelte:element>
{:else}
	<slot {...$$restProps} />
{/if}
