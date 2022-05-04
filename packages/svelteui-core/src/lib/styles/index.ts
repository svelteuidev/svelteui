export * from './utils';

export { colors } from './default-colors';
export {
	css,
	dark,
	theme,
	config,
	globalCss,
	keyframes,
	getCssText,
	createTheme,
	NormalizeCSS,
	SvelteUIGlobalCSS
} from '../stitches.config';

export { default as SvelteUIProvider } from './SvelteUIProvider.svelte';

/** types exporting */
import type {
	SvelteUIProviderProps,
	DefaultProps,
	ColorScheme,
	DefaultBackground,
	DefaultColor,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiMargins,
	SvelteuiMargin,
	SvelteuiShadow,
	SvelteuiNumberSize,
	SvelteuiSizes,
	SvelteuiSize,
	HeadingStyle,
	Override,
	LoaderType,
	CSS,
	SvelteuiFontSizes,
	SvelteuiNumberFontSize,
	SvelteuiTextAlignment,
	SvelteuiTextTransform,
	VariantThemeFunction
} from './types';
export type {
	SvelteUIProviderProps,
	DefaultProps,
	ColorScheme,
	DefaultBackground,
	DefaultColor,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiMargins,
	SvelteuiMargin,
	SvelteuiShadow,
	SvelteuiNumberSize,
	SvelteuiSizes,
	SvelteuiSize,
	HeadingStyle,
	Override,
	LoaderType,
	CSS,
	SvelteuiFontSizes,
	SvelteuiNumberFontSize,
	SvelteuiTextAlignment,
	SvelteuiTextTransform,
	VariantThemeFunction
};
