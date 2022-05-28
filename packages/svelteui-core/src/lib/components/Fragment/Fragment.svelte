<script lang="ts">
	import { Overlay } from '../Overlay';
	import { Text } from '../Text';
	import { setContext, onMount, onDestroy, afterUpdate, beforeUpdate } from 'svelte';
	import type { FragmentProps as $$FragmentProps } from './Fragment.styles';

	export let mode: $$FragmentProps['mode'] = 'fragment';
	export let context: $$FragmentProps['context'] = null;
	export let onCreate: $$FragmentProps['onCreate'] = null;
	export let onMountFn: $$FragmentProps['onMount'] = null;
	export let beforeUpdateFn: $$FragmentProps['beforeUpdate'] = null;
	export let afterUpdateFn: $$FragmentProps['afterUpdate'] = null;
	export let onDestroyFn: $$FragmentProps['onDestroy'] = null;

	if (context) {
		Object.keys(context).forEach((key) => {
			setContext(key, context[key]);
		});
	}
	if (onCreate) bind(onCreate)();
	if (onMountFn) onMount(bind(onMount));
	if (beforeUpdateFn) beforeUpdate(bind(beforeUpdate));
	if (afterUpdateFn) afterUpdate(bind(afterUpdate));
	if (onDestroyFn) onDestroy(bind(onDestroy));

	function bind(callback) {
		return () => callback({ props: $$restProps });
	}

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
	<Fragment>
		<div>Child 1</div>
		<div>Child 2</div>
		<div>Child 3</div>
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
