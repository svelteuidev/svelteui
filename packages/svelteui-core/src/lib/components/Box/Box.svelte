<script lang="ts">
	import { css as _css } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BoxProps as $$BoxProps } from './Box.styles';

	export let use: $$BoxProps['use'] = [],
		element: $$BoxProps['element'] = undefined,
		className: $$BoxProps['className'] = '',
		css: $$BoxProps['override'] = {},
		root: $$BoxProps['root'] = undefined;
	export { className as class };

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	let isHTMLElement;
	let isComponent;
	$: {
		isHTMLElement = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	$: BoxStyles = _css({});
</script>

<!--
@component

Add inline styles to any element or component with sx.
	
@see https://svelteui.org/core/box
@example
    ```svelte
    <Box css={{backgroundColor: '$blue600'}}>example</Box>
	<Box root='span'>example</Box>
	<Box css={{pt: '$20'}}>padding top of 5rem</Box> // uses the paddingTop shorthand, and theme scale
    ```
-->

{#if isHTMLElement}
	<!-- prettier-ignore -->
	<svelte:element
		bind:this={element}
		this={root}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css })}"
		{...$$restProps}
	>
		<slot></slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component
		this={root}
		bind:this={element}
		use={[forwardEvents, [useActions, use]]}
		class="{className} {BoxStyles({ css })}"
		{...$$restProps}
	>
		<slot />
	</svelte:component>
{:else}
	<div
		bind:this={element}
		use:forwardEvents
		use:useActions={use}
		class="{className} {BoxStyles({ css })}"
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
