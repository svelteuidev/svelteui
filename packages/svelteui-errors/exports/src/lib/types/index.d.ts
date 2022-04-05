/** ------------------Import the types from package---------------- */
import type {
	ColorScheme,
	HeadingStyle,
	Override,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiMargin,
	SvelteuiMargins,
	SvelteuiNumberSize,
	SvelteuiShadow,
	SvelteuiSize,
	SvelteuiSizes,
	SvelteuiTheme,
	SvelteuiThemeBase,
	SvelteuiThemeOther
} from '@svelteuidev/core/src/lib';
/** --------Re-export the types for use in the errors package-------- */
export {
	ColorScheme,
	HeadingStyle,
	Override,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiMargin,
	SvelteuiMargins,
	SvelteuiNumberSize,
	SvelteuiShadow,
	SvelteuiSize,
	SvelteuiSizes,
	SvelteuiTheme,
	SvelteuiThemeBase,
	SvelteuiThemeOther
};
/** ------------------------------------------------------------------ */

export type { UserException } from './user-exception';
export type { CurrentComponents } from './CurrentComponents';
export type { ErrorCtx } from './error-context';
export type { ButtonProps } from './components/Button/props';
export type { LoaderProps } from './components/Loader/props';
export type { CodeProps } from './components/Code/props';
