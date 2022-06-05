<script lang="ts" context="module">
	import { config as _config } from './svelteui.config';
	import { key, useSvelteUIThemeContext } from './svelteui.provider';
	import { colorScheme } from './svelteui.stores';
	import { useSvelteUITheme } from './default-theme';
	import type { SvelteUIProviderProps as $$SvelteUIProviderProps } from '../types';
	import type { SvelteUIProviderContextType } from './svelteui.provider';
</script>

<script lang="ts">
	import { dark, theme as light, css, getCssText, NormalizeCSS, SvelteUIGlobalCSS } from '../index';
	import { createEventForwarder, useActions } from '$lib/internal';
	import { get_current_component } from 'svelte/internal';
	import { setContext } from 'svelte';

	export let use: $$SvelteUIProviderProps['use'] = [],
		className: $$SvelteUIProviderProps['className'] = '',
		element: $$SvelteUIProviderProps['element'] = undefined,
		theme: $$SvelteUIProviderProps['theme'] = useSvelteUITheme(),
		styles: $$SvelteUIProviderProps['styles'] = {},
		defaultProps: $$SvelteUIProviderProps['defaultProps'] = {},
		themeObserver: $$SvelteUIProviderProps['themeObserver'] = 'light',
		withNormalizeCSS: $$SvelteUIProviderProps['withNormalizeCSS'] = false,
		withGlobalStyles: $$SvelteUIProviderProps['withGlobalStyles'] = false,
		ssr: $$SvelteUIProviderProps['ssr'] = false,
		override: $$SvelteUIProviderProps['override'] = {},
		config: $$SvelteUIProviderProps['config'] = _config,
		inherit: $$SvelteUIProviderProps['inherit'] = false;
	export { className as class };

	let ctx: SvelteUIProviderContextType;

	setContext<SvelteUIProviderContextType>(key, {
		theme: useSvelteUITheme(),
		styles: {},
		defaultProps: {}
	});

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

	$: ctx = useSvelteUIThemeContext();
	$: overrides = {
		themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
		styles: inherit ? { ...ctx.styles, ...styles } : styles,
		defaultProps: inherit ? { ...ctx.styles, ...defaultProps } : defaultProps
	};

	$: {
		$colorScheme = themeObserver;
	}
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
	class="{className} {ProviderStyles({ css: override })} {themeObserver === 'light' ? light : dark}"
	{...$$restProps}
>
	<slot />
</div>
