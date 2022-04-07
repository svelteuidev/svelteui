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
	<slot />
</div>
