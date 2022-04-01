<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';

	/**
	 * @todo
	 * A way to subscribe to theme changes outside of component scope
	 * Such as context in react
	 * Current implementation is a store but is a work in progress
	 */
	// export const colorScheme: Writable<ColorScheme> = writable('light');
</script>

<script lang="ts">
	import type { ColorScheme } from './types';
	import { dark, theme, getCssText } from './index';

	export let themeObserver: ColorScheme = 'light';
	export let ssr: boolean = false;

	/** weird behavior occurs if the logic is not stored in a variable */
	const ssrStyles = `<style\tid="stitches">${getCssText()}<\/style>`; //eslint-disable-line
</script>

<svelte:head>
	{#if ssr}
		{@html ssrStyles}
	{/if}
</svelte:head>

<div class={themeObserver === 'light' ? theme : dark}>
	<slot><!-- optional fallback --></slot>
</div>
