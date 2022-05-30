import type { ColorShades, GetSize, theme as DefaultTheme } from '../../index';
import type { SvelteUIColor } from '../../types';

export interface Fn {
	themeColor: (color: SvelteUIColor, shade?: ColorShades) => string;
	size: (props: GetSize) => number;
}

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
