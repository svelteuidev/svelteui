import type { SvelteuiTheme, SvelteuiThemeBase } from '../types';
import { fns } from './fns';

export function attachFunctions(themeBase: SvelteuiThemeBase): SvelteuiTheme {
	return {
		...themeBase,
		fn: {
			themeColor: fns.themeColor(themeBase),
			rgba: fns.rgba
		}
	};
}
