import { colors } from './colors.js';
import type { Theme } from './types';

export function getTheme(): Theme {
	// TODO: this should be saved somewhere in a variable
	return {
		colors: colors,
		primary: colors['blue'][6],
		white: '#ffffff'
	};
}
