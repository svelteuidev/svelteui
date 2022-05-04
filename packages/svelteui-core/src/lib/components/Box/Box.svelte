<script lang="ts">
	import { css as _css } from '$lib/styles';
	import type { BoxProps as $$BoxProps } from './Box.styles';

	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: $$BoxProps['className'] = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let css: $$BoxProps['override'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: $$BoxProps['root'] = undefined;

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
	<svelte:element this={root} class="{className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Fill the box up</slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component this={root} class="{className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Fill the box up</slot>
	</svelte:component>
{:else}
	<div class="{className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Fill the box up</slot>
	</div>
{/if}
