<script lang="ts" module>
	import { setContext } from 'svelte';
	import { beforeUpdate, get_current_component } from 'svelte/internal';
	import { mergeTheme } from '../';
	import { useSvelteUITheme } from './default-theme';
	import { colorScheme } from './svelteui.stores';
	import { key, useSvelteUIThemeContext } from './svelteui.provider';
	import { createStyles, dark, NormalizeCSS, SvelteUIGlobalCSS } from '../../index';
	import { createEventForwarder, useActions } from '$lib/internal';
	import type { SvelteUITheme } from '../types';
	import type { SvelteUIProviderProps as $$SvelteUIProviderProps } from './svelteui.provider';
	import type { SvelteUIProviderContextType } from './svelteui.provider';
</script>

<script lang="ts">
	import { run } from 'svelte/legacy';

	interface Props {
		use?: $$SvelteUIProviderProps['use'];
		class?: $$SvelteUIProviderProps['className'];
		element?: $$SvelteUIProviderProps['element'];
		theme?: $$SvelteUIProviderProps['theme'];
		styles?: $$SvelteUIProviderProps['styles'];
		defaultProps?: $$SvelteUIProviderProps['defaultProps'];
		themeObserver?: $$SvelteUIProviderProps['themeObserver'];
		withNormalizeCSS?: $$SvelteUIProviderProps['withNormalizeCSS'];
		withGlobalStyles?: $$SvelteUIProviderProps['withGlobalStyles'];
		override?: $$SvelteUIProviderProps['override'];
		inherit?: $$SvelteUIProviderProps['inherit'];
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		use = [],
		class: className = '',
		element = $bindable(undefined),
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
	}: Props = $props();
	

	beforeUpdate(() => {
		const htmlClassList: DOMTokenList = document.documentElement.classList;
		if ($colorScheme === 'dark') htmlClassList.add(dark.className);
		if ($colorScheme === 'light') htmlClassList.remove(dark.className);
	});

	const ctx = useSvelteUIThemeContext();
	const useStyles = createStyles(() => ({ root: {} }));
	const forwardEvents = createEventForwarder(get_current_component());
	const DEFAULT_THEME = useSvelteUITheme();

	let currentTheme: string | null = $state(null);
	run(() => {
		if (themeObserver !== null) {
			currentTheme =
				themeObserver === 'light' ? (mergedTheme as unknown as string) : (dark as string);
		}
	});

	run(() => {
		if (withGlobalStyles) SvelteUIGlobalCSS();
	});
	run(() => {
		if (withNormalizeCSS) NormalizeCSS();
	});
	let overrides = $derived({
		themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
		styles: inherit ? { ...ctx.styles, ...styles } : styles,
		defaultProps: inherit ? { ...ctx.styles, ...defaultProps } : defaultProps
	});
	run(() => {
		setContext<SvelteUIProviderContextType>(key, {
			theme: overrides.themeOverride as SvelteUITheme,
			styles: {},
			defaultProps: {}
		});
	});
	run(() => {
		colorScheme.set(themeObserver);
	});
	let mergedTheme = $derived(mergeTheme(DEFAULT_THEME, overrides.themeOverride));
	let { cx, classes } = $derived(useStyles(null, { override }));
</script>

<div
	id="SVELTEUI_PROVIDER"
	bind:this={element}
	use:useActions={use}
	use:forwardEvents
	class={cx(className, classes.root, currentTheme)}
	{...rest}
>
	{@render children?.()}
</div>
