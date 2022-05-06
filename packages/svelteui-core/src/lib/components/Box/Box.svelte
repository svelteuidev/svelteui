<script lang="ts">
	import { css as _css } from '$lib/styles';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import type { BoxProps as $$BoxProps } from './Box.styles';

	/** Used for forwarding actions from component */
	export let use: $$BoxProps['use'] = [];
	/** Used for components to bind to elements */
	export let element: $$BoxProps['element'] = undefined;
	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$BoxProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let css: $$BoxProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$BoxProps['root'] = undefined;

	/** An action that forwards inner dom node events to parent component */
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
**UNSTABLE**: new API, yet to be vetted.

Add inline styles to any element or component with sx.
	
@see https://svelteui-docs.vercel.app/docs/core/box
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
		this={root}
		bind:this={element}
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
