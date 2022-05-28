<script lang="ts" context="module">
	import { _config } from './svelteui.config';
	import { colorScheme } from './svelteui.stores';
	import type { SvelteUIProviderProps as $$SvelteUIProviderProps } from '../types';
</script>

<script lang="ts">
	import { dark, theme, css, getCssText, NormalizeCSS, SvelteUIGlobalCSS } from '../index';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';

	export let use: $$SvelteUIProviderProps['use'] = [];
	export let className: $$SvelteUIProviderProps['className'] = '';
	export { className as class };
	export let element: $$SvelteUIProviderProps['element'] = undefined;
	export let themeObserver: $$SvelteUIProviderProps['themeObserver'] = 'light';
	export let withNormalizeCSS: $$SvelteUIProviderProps['withNormalizeCSS'] = false;
	export let withGlobalStyles: $$SvelteUIProviderProps['withGlobalStyles'] = false;
	export let ssr: $$SvelteUIProviderProps['ssr'] = false;
	export let override: $$SvelteUIProviderProps['override'] = {};
	export let config: $$SvelteUIProviderProps['config'] = _config;

	$: {
		$colorScheme = themeObserver;
	}

	/** An action that forwards inner dom node events from parent component */
	const forwardEvents = createEventForwarder(get_current_component());

	/** Colors used when withGlobalStyles is set to true */
	const colors = {
		lightColor: config.light.color,
		lightBackground: config.light.bg,
		darkColor: config.dark.color,
		darkBackground: config.dark.bg
	};
	const { darkBackground, darkColor, lightBackground, lightColor } = colors;

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

<div
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	class="{className} {ProviderStyles({ css: override })} {themeObserver === 'light' ? theme : dark}"
	{...$$restProps}
>
	<slot />
</div>
