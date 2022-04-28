<script lang="ts">
	import { dark, theme, css, getCssText, NormalizeCSS, SvelteUIGlobalCSS } from './index';
	import type { ColorScheme, Override } from './types';

	export let themeObserver: ColorScheme = 'light';
	export let withNormalizeCSS: boolean = false;
	export let withGlobalStyles: boolean = false;
	export let ssr: boolean = false;
	export let override: Override['props'] = {};

	// weird behavior occurs if the logic is not stored in a variable
	const ssrStyles = `<style\tid="stitches">${getCssText()}<\/style>`; //eslint-disable-line
	const globalStylesLight = `<style\tid="svelteui-inject" type="text\/css">body{background-color: white;color: black;}<\/style>`; //eslint-disable-line
	const globalStylesDark = `<style\tid="svelteui-inject" type="text\/css">body{background-color: #1A1B1E;color: #C1C2C5;}<\/style>`; //eslint-disable-line
	const ProviderStyles = css({});

	$: if (withNormalizeCSS) NormalizeCSS();
	SvelteUIGlobalCSS();
</script>

<svelte:head>
	{#if ssr}
		{@html ssrStyles}
	{/if}
	{#if withGlobalStyles}
		{#if themeObserver === 'light'}
			{@html globalStylesLight}
		{:else}
			{@html globalStylesDark}
		{/if}
	{/if}
</svelte:head>

<div class="{ProviderStyles({ css: override })} {themeObserver === 'light' ? theme : dark}">
	<slot />
</div>
