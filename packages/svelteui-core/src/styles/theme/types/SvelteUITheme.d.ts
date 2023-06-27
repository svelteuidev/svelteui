import type { DeepPartial, SvelteUIColor, theme, config, fns } from '../../index';
import type * as Stitches from '@stitches/core';

export type CSS = Stitches.CSS<typeof config>;

export type Fns = typeof fns;

export type DefaultTheme = typeof theme;

export type LoaderType = 'bars' | 'circle' | 'dots';

export type ColorShades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type VariantThemeFunction = Record<string, Record<string, string | Record<string, unknown>>>;

export type SvelteUIThemeOverride = DeepPartial<Omit<SvelteUITheme, 'fn' | 'dark'>>;

export interface Override {
	props: CSS;
	// props: CSS | ((theme: SvelteUITheme) => CSS);
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}

export interface Fn {
	cover: Fns['cover'];
	themeColor: Fns['themeColor'];
	size: Fns['size'];
	radius: Fns['radius'];
	variant: Fns['variant'];
	rgba: Fns['rgba'];
}

export interface SvelteUITheme {
	fn: Fn;
	dark: string;
	colorScheme: 'light' | 'dark';
	colorNames: Record<SvelteUIColor, string>;
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
