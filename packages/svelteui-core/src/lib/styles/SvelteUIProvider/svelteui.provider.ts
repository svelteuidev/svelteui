import { getContext } from 'svelte';
import type { SvelteUITheme } from '../engine/types';
import type { CSS } from '../types';

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

export const key = {};

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
