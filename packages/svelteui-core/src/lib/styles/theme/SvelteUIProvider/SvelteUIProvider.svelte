<script lang="ts" context="module">
	import { setContext } from 'svelte';
	import { get_current_component } from 'svelte/internal';
	import { mergeTheme } from '../';
	import { useSvelteUITheme } from './default-theme';
	import { colorScheme } from './svelteui.stores';
	import { key, ssrStyles, useSvelteUIThemeContext } from './svelteui.provider';
	import { dark, css, getCssText, NormalizeCSS, SvelteUIGlobalCSS } from '../../index';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { SvelteUITheme } from '../types';
	import type { SvelteUIProviderProps as $$SvelteUIProviderProps } from './svelteui.provider';
	import type { SvelteUIProviderContextType } from './svelteui.provider';
</script>

<script lang="ts">
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
		inherit: $$SvelteUIProviderProps['inherit'] = false;
	export { className as class };

	const ctx = useSvelteUIThemeContext();
	const forwardEvents = createEventForwarder(get_current_component());
	const ProviderStyles = css({});
	const DEFAULT_THEME = useSvelteUITheme();

	$: if (withGlobalStyles) SvelteUIGlobalCSS();
	$: if (withNormalizeCSS) NormalizeCSS();
	$: colorScheme.set(themeObserver);
	$: overrides = {
		themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
		styles: inherit ? { ...ctx.styles, ...styles } : styles,
		defaultProps: inherit ? { ...ctx.styles, ...defaultProps } : defaultProps
	};
	$: setContext<SvelteUIProviderContextType>(key, {
		theme: overrides.themeOverride as SvelteUITheme,
		styles: {},
		defaultProps: {}
	});
	$: mergedTheme = mergeTheme(DEFAULT_THEME, overrides.themeOverride);
</script>

<svelte:head>
	{#if ssr}
		{@html ssrStyles(getCssText)}
	{/if}
</svelte:head>

<div
	id="SVELTEUI_PROVIDER"
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	class="{className} {ProviderStyles({ css: override })} {themeObserver === 'light'
		? mergedTheme
		: dark}"
	{...$$restProps}
>
	<slot />
</div>
