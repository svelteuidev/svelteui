import { colors } from './default-theme/colors.js';
import type { Theme } from './types';

export function getTheme(): Theme {
	// TODO: this should be saved somewhere in a variable
	return {
		colors: colors,
		primary: colors['blue'][6],
		white: '#ffffff',
		sizes: {
			xs: 10,
			sm: 12,
			md: 16,
			lg: 20,
			xl: 32
		}
	};
}
