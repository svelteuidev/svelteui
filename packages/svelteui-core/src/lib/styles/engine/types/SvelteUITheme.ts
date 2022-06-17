import type { theme as DefaultTheme, DeepPartial } from '../../index';
import type { Fn } from '../../functions';

export interface SvelteUITheme {
	colors: typeof DefaultTheme.colors;
	space: typeof DefaultTheme.space;
	fontSizes: typeof DefaultTheme.fontSizes;
	fonts: typeof DefaultTheme.fonts;
	fontWeights: typeof DefaultTheme.fontWeights;
	lineHeights: typeof DefaultTheme.lineHeights;
	letterSpacings: typeof DefaultTheme.letterSpacings;
	sizes: typeof DefaultTheme.sizes;
	radii: typeof DefaultTheme.radii;
	shadows: typeof DefaultTheme.shadows;
	zIndices: typeof DefaultTheme.zIndices;
	borderWidths: typeof DefaultTheme.borderWidths;
	breakpoints: typeof DefaultTheme.breakpoints;
	borderStyles: typeof DefaultTheme.borderStyles;
	transitions: typeof DefaultTheme.transitions;
	colorScheme: 'light' | 'dark';
	dark: string;
	fn: Fn;
}

export type SvelteUIThemeOverride = DeepPartial<Omit<SvelteUITheme, 'fn' | 'dark'>>;
