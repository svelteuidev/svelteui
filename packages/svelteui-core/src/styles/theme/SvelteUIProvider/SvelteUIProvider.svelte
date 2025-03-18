<script lang="ts" module>
	import { setContext } from 'svelte';
	import { useActions } from '$lib/internal';

	import { createStyles, dark, NormalizeCSS, SvelteUIGlobalCSS } from '../../index';
	import { mergeTheme } from '../';
	import type { SvelteUITheme } from '../types';
	import { useSvelteUITheme } from './default-theme';
	import { colorScheme } from './svelteui.stores';
	import { key, useSvelteUIThemeContext } from './svelteui.provider';
	import type { SvelteUIProviderProps } from './svelteui.provider';
	import type { SvelteUIProviderContextType } from './svelteui.provider';
</script>

<script lang="ts">
	let {
		use = [],
		class: className = '',
		element = $bindable(null),
		theme = useSvelteUITheme(),
		styles = {},
		defaultProps = {},
		themeObserver = 'light',
		withNormalizeCSS = false,
		withGlobalStyles = false,
		override = {},
		inherit = false,
		children,
		...rest
	}: SvelteUIProviderProps = $props();

	$effect.pre(() => {
		const htmlClassList: DOMTokenList = document.documentElement.classList;
		if ($colorScheme === 'dark') htmlClassList.add(dark.className);
		if ($colorScheme === 'light') htmlClassList.remove(dark.className);
	});

	const ctx = useSvelteUIThemeContext();
	const useStyles = createStyles(() => ({ root: {} }));
	const DEFAULT_THEME = useSvelteUITheme();

	let currentTheme: string | null = $state(null);
	$effect(() => {
		if (themeObserver !== null) {
			currentTheme =
				themeObserver === 'light' ? (mergedTheme as unknown as string) : (dark as string);
		}
	});

	$effect(() => {
		if (withGlobalStyles) SvelteUIGlobalCSS();
	});
	$effect(() => {
		if (withNormalizeCSS) NormalizeCSS();
	});
	let overrides = $derived({
		themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
		styles: inherit ? { ...ctx.styles, ...styles } : styles,
		defaultProps: inherit ? { ...ctx.styles, ...defaultProps } : defaultProps
	});
	$effect(() => {
		setContext<SvelteUIProviderContextType>(key, {
			theme: overrides.themeOverride as SvelteUITheme,
			styles: {},
			defaultProps: {}
		});
	});
	$effect(() => {
		colorScheme.set(themeObserver);
	});
	let mergedTheme = $derived(mergeTheme(DEFAULT_THEME, overrides.themeOverride));
	let { cx, classes } = $derived(useStyles(null, { override }));
</script>

<div
	id="SVELTEUI_PROVIDER"
	bind:this={element}
	use:useActions={use}
	class={cx(className, classes.root, currentTheme)}
	{...rest}
>
	{@render children?.()}
</div>
