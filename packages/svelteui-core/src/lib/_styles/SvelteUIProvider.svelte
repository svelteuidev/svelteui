<script lang="ts">
	import type { ColorScheme } from './types';
	import { dark, theme, getCssText, colorScheme } from './index';

	export let themeObserver: ColorScheme = 'light';
	export let ssr: boolean = false;

	$: colorScheme.set(themeObserver);

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
