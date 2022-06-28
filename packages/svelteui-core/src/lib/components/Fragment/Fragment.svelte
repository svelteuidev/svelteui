<script lang="ts">
	import { Overlay } from '../Overlay';
	import { Text } from '../Text';
	import { createEventDispatcher, setContext, onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import type { FragmentProps as $$FragmentProps } from './Fragment.styles';

	export let mode: $$FragmentProps['mode'] = 'fragment';
	export let context: $$FragmentProps['context'] = null;

	const dispatch = createEventDispatcher();

	if (context) {
		Object.keys(context).forEach((key) => {
			setContext(key, context[key]);
		});
	}

	dispatch('create', { props: $$restProps });
	onMount(() => dispatch('mount', { props: $$restProps }));
	beforeUpdate(() => dispatch('before:update', { props: $$restProps }));
	afterUpdate(() => dispatch('after:update', { props: $$restProps }));
	onDestroy(() => dispatch('destroy', { props: $$restProps }));

	/** action for rendering fragment content */
	function fragment(node) {
		node.parentElement.appendChild(node.content);
		node.setAttribute('style', 'display: none;');

		return {
			destroy() {
				if (node && node.parentElement) {
					node.parentElement.removeChild(node.content);
				}
			}
		};
	}
</script>

<!--
@component
Fragments let you group a list of children without adding extra nodes to the DOM. It also allows you to test lifecycle methods, state, or context without needing to create a new component.
	
@see https://svelteui.org/core/fragment
@example
    ```svelte
	// alternative to <svelte:fragment>
	<Fragment slot='myslot'>
		<div>Child 1</div>
		<div>Child 2</div>
		<div>Child 3</div>
	</Fragment>

	// lifecyle usage
	<Fragment
		on:create={() => {
			setContext('some context key', theValue)
		}}
	>
	    children can now access this context value
  	</Fragment>
    ```
-->

{#if mode === 'fragment'}
	<template use:fragment>
		<slot {...$$restProps} />
	</template>
{:else if mode === 'lifecycle'}
	<slot {...$$restProps} />
{:else}
	<Text size="xl" align="center" override={{ mt: '15rem' }}>
		You must set the mode prop to either `fragment` or `lifecycle` on the Fragment component
	</Text>
	<Overlay zIndex={0} />
{/if}
