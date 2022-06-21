import type { TransitionConfig } from 'svelte/transition';
import type { DeepPartial, theme, config, fns } from '../../index';
import type * as Stitches from '@stitches/core';

export type CSS = Stitches.CSS<typeof config>;

export type Fns = typeof fns;

export type DefaultTheme = typeof theme;

export type LoaderType = 'bars' | 'circle' | 'dots';

export type VariantThemeFunction = Record<string, Record<string, string | Record<string, unknown>>>;

export type Transition = (node: Element, params: Record<string, unknown>) => TransitionConfig;

export type SvelteUIThemeOverride = DeepPartial<Omit<SvelteUITheme, 'fn' | 'dark'>>;

export interface Override {
	props: CSS;
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}

export interface Fn {
	themeColor: Fns['themeColor'];
	size: Fns['size'];
	radius: Fns['radius'];
}

export interface SvelteUITheme {
	fn: Fn;
	dark: string;
	colorScheme: 'light' | 'dark';
	colors: DefaultTheme['colors'];
	space: DefaultTheme['space'];
	fontSizes: DefaultTheme['fontSizes'];
	fonts: DefaultTheme['fonts'];
	fontWeights: DefaultTheme['fontWeights'];
	lineHeights: DefaultTheme['lineHeights'];
	letterSpacings: DefaultTheme['letterSpacings'];
	sizes: DefaultTheme['sizes'];
	radii: DefaultTheme['radii'];
	shadows: DefaultTheme['shadows'];
	zIndices: DefaultTheme['zIndices'];
	borderWidths: DefaultTheme['borderWidths'];
	breakpoints: DefaultTheme['breakpoints'];
	borderStyles: DefaultTheme['borderStyles'];
	transitions: DefaultTheme['transitions'];
}
