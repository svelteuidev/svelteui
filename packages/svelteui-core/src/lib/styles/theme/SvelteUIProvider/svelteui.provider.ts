import { getContext } from 'svelte';
import type { SvelteUITheme } from '../types';
import type { CSS, ColorScheme, DefaultProps, DeepPartial } from '../types';

export type ProviderStyles = Record<
	string,
	Record<string, CSS> | ((theme: SvelteUITheme, params: Record<string, any>) => Record<string, CSS>)
>;

export type SvelteUIDefaultProps = Record<string, Record<string, any>>;

export interface SvelteUIProviderContextType {
	theme: SvelteUITheme;
	styles: ProviderStyles;
	defaultProps: SvelteUIDefaultProps;
}

export interface SvelteUIProviderProps extends DefaultProps<HTMLDivElement> {
	theme?: DeepPartial<SvelteUITheme>;
	styles?: ProviderStyles;
	defaultProps?: SvelteUIDefaultProps;
	themeObserver?: ColorScheme;
	withNormalizeCSS?: boolean;
	withGlobalStyles?: boolean;
	ssr?: boolean;
	inherit?: boolean;
}

/** --------------------- */

export const key = {};

export const ssrStyles = (fn: () => string): string => {
	return `<style\tid="stitches">${fn()}<\/style>`;
};

export function useSvelteUIThemeContext(): SvelteUIProviderContextType {
	return getContext(key);
}

export function useSvelteUIDefaultProps<T extends Record<string, any>>(
	component: string,
	defaultProps: Partial<T>,
	props: T
): T {
	const contextProps = useSvelteUIThemeContext().defaultProps?.[component];
	return { ...defaultProps, ...contextProps, ...props };
}
