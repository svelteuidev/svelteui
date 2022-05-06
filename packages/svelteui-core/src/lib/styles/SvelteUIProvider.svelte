<script lang="ts" context="module">
	import type { SvelteUIProviderProps as $$SvelteUIProviderProps } from './types';
	const _config: $$SvelteUIProviderProps['config'] = {
		light: { bg: 'White', color: 'Black' },
		dark: { bg: '#1A1B1E', color: '#C1C2C5' }
	};
</script>

<script lang="ts">
	import { dark, theme, css, getCssText, NormalizeCSS, SvelteUIGlobalCSS } from './index';

	export let themeObserver: $$SvelteUIProviderProps['themeObserver'] = 'light';
	export let withNormalizeCSS: $$SvelteUIProviderProps['withNormalizeCSS'] = false;
	export let withGlobalStyles: $$SvelteUIProviderProps['withGlobalStyles'] = false;
	export let ssr: $$SvelteUIProviderProps['ssr'] = false;
	export let override: $$SvelteUIProviderProps['override'] = {};
	export let config: $$SvelteUIProviderProps['config'] = _config;

	const lightColor = config.light.color;
	const lightBackground = config.light.bg;
	const darkColor = config.dark.color;
	const darkBackground = config.dark.bg;

	/**
	 * weird behavior occurs if the logic is not stored in a variable
	 */
	const ssrStyles = `<style\tid="stitches">${getCssText()}<\/style>`; //eslint-disable-line
	const globalStylesLight = `<style\tid="svelteui-inject" type="text\/css">body{background-color: ${lightBackground};color: ${lightColor};}<\/style>`; //eslint-disable-line
	const globalStylesDark = `<style\tid="svelteui-inject" type="text\/css">body{background-color: ${darkBackground};color: ${darkColor};}<\/style>`; //eslint-disable-line
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
