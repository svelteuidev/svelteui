import { rgba, dark, fns } from '../../index';
import type { SvelteUIColor, SvelteUIGradient, VariantThemeFunction } from '../../types';

export const vFunc = (color: SvelteUIColor, gradient: SvelteUIGradient): VariantThemeFunction => {
	const { themeColor } = fns;

	return {
		/** Filled variant */
		filled: {
			[`${dark.selector} &`]: {
				backgroundColor: themeColor(color, 8)
			},
			border: 'transparent',
			backgroundColor: themeColor(color, 6),
			color: 'White',
			'&:hover': { backgroundColor: themeColor(color, 7) }
		},
		/** Light variant */
		light: {
			[`${dark.selector} &`]: {
				backgroundColor: rgba(themeColor(color, 8), 0.35),
				color: color === 'dark' ? themeColor('dark', 0) : themeColor(color, 2),
				'&:hover': { backgroundColor: rgba(themeColor(color, 7), 0.45) }
			},
			border: 'transparent',
			backgroundColor: themeColor(color, 0),
			color: color === 'dark' ? themeColor('dark', 9) : themeColor(color, 6),
			'&:hover': { backgroundColor: themeColor(color, 1) }
		},
		/** Outline variant */
		outline: {
			[`${dark.selector} &`]: {
				border: `1px solid ${themeColor(color, 4)}`,
				color: `${themeColor(color, 4)}`,
				'&:hover': { backgroundColor: rgba(themeColor(color, 4), 0.05) }
			},
			border: `1px solid ${themeColor(color, 7)}`,
			backgroundColor: 'transparent',
			color: themeColor(color, 7),
			'&:hover': {
				backgroundColor: rgba(themeColor(color, 0), 0.35)
			}
		},
		/** Subtle variant */
		subtle: {
			[`${dark.selector} &`]: {
				color: color === 'dark' ? themeColor('dark', 0) : themeColor(color, 2),
				'&:hover': { backgroundColor: rgba(themeColor(color, 8), 0.35) }
			},
			border: 'transparent',
			backgroundColor: 'transparent',
			color: color === 'dark' ? themeColor('dark', 9) : themeColor(color, 6),
			'&:hover': {
				backgroundColor: themeColor(color, 0)
			}
		},
		/** Default variant */
		default: {
			[`${dark.selector} &`]: {
				border: `1px solid ${themeColor('dark', 5)}`,
				backgroundColor: themeColor('dark', 5),
				color: 'White',
				'&:hover': { backgroundColor: themeColor(color, 4) }
			},
			border: `1px solid ${themeColor('gray', 4)}`,
			backgroundColor: 'White',
			color: 'Black',
			'&:hover': { backgroundColor: themeColor('gray', 0) }
		},
		/** White variant */
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: themeColor(color, 7),
			'&:hover': { backgroundColor: 'White' }
		},
		/** Gradient variant */
		gradient: {
			border: 'transparent',
			background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
			color: 'White'
		}
	};
};
