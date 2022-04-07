import type { SvelteuiSize, SvelteuiSizes } from './SvelteuiSize';
import type { ColorScheme } from './ColorScheme';
import type { SvelteuiColor } from './SvelteuiColor';
import type { CSS } from '@stitches/core';

export type SvelteuiThemeOther = Record<string, unknown>;
export type LoaderType = 'bars' | 'circle' | 'dots';

export interface Override {
	props: CSS;
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}

interface SvelteuiThemeFunctions {
	themeColor(color: string, shade: number, primaryFallback?: boolean): string;
	rgba(color: string, alpha: number): string;
}

export interface SvelteuiTheme {
	loader: LoaderType;
	colorScheme: ColorScheme;
	white: string;
	black: string;
	colors: Record<SvelteuiColor, string[]>;
	fontFamily: string;
	fontFamilyMonospace: string;
	fontFamilyFallback: string;
	lineHeight: number | string | undefined;
	primaryColor: string;

	fontSizes: SvelteuiSizes;
	radius: SvelteuiSizes;
	spacing: SvelteuiSizes;
	breakpoints: SvelteuiSizes;
	shadows: Record<SvelteuiSize, string>;

	headings: {
		fontFamily: string | undefined;
		fontWeight: number | string | undefined;
		sizes: {
			h1: HeadingStyle;
			h2: HeadingStyle;
			h3: HeadingStyle;
			h4: HeadingStyle;
			h5: HeadingStyle;
			h6: HeadingStyle;
		};
	};

	fn: SvelteuiThemeFunctions;
	other?: SvelteuiThemeOther;
}

export type SvelteuiThemeBase = Omit<SvelteuiTheme, 'fn'>;
