<script lang="ts">
	import { css as _css } from '$lib/styles';
	import type { Override } from '$lib/styles';

	/** Used for custom classes to be applied to the text e.g. Tailwind classes */
	export let className: string = '';
	export { className as class };
	/** Css prop for custom theming the component */
	export let css: Override['props'] = {};
	/** The component or HTML tag to be used as the root component for the text */
	export let root: keyof HTMLElementTagNameMap = undefined;

	let isHTMLComponent;
	let isComponent;
	$: {
		isHTMLComponent = root && typeof root === 'string';
		isComponent = root && typeof root === 'function';
	}

	const BoxStyles = _css({});
</script>

<!--
@component
**UNSTABLE**: new API, yet to be vetted.

Display text and links with theme styles.
	
@see https://svelteui-docs.vercel.app/docs/core/text
@example
    ```svelte
    <Box>example</Box>
    ```
-->

{#if isHTMLComponent}
	<svelte:element this={root} class="{className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Enter some text</slot>
	</svelte:element>
{:else if isComponent}
	<svelte:component this={root} class="text {className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Enter some text</slot>
	</svelte:component>
{:else}
	<div class="{className} {BoxStyles({ css })}" {...$$restProps}>
		<slot>Enter some text</slot>
	</div>
{/if}
