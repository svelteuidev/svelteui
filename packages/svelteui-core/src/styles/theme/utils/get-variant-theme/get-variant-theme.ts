import { dark, fns } from '$lib/styles';
import type { SvelteUIColor, SvelteUIGradient, VariantThemeFunction } from '$lib/styles';

export const vFunc = (color: SvelteUIColor, gradient?: SvelteUIGradient): VariantThemeFunction => {
	const { themeColor, rgba } = fns;

	const disabled = {
		'&.disabled': {
			pointerEvents: 'none',
			borderColor: 'transparent',
			backgroundColor: 'rgb(233, 236, 239)',
			background: 'rgb(233, 236, 239)',
			color: 'rgb(173, 181, 189)',
			cursor: 'not-allowed'
		}
	};

	const variants = {
		/** Filled variant */
		filled: {
			[`${dark.selector} &`]: {
				backgroundColor: themeColor(color, 8)
			},
			border: 'transparent',
			backgroundColor: themeColor(color, 6),
			color: 'White',
			'&:hover': { backgroundColor: themeColor(color, 7) },
			...disabled
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
			'&:hover': { backgroundColor: themeColor(color, 1) },
			...disabled
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
			},
			...disabled
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
			},
			...disabled
		},
		/** Default variant */
		default: {
			[`${dark.selector} &`]: {
				border: `1px solid ${themeColor('dark', 5)}`,
				backgroundColor: themeColor('dark', 5),
				color: 'White',
				'&:hover': { backgroundColor: themeColor('dark', 4) }
			},
			border: `1px solid ${themeColor('gray', 4)}`,
			backgroundColor: 'White',
			color: 'Black',
			'&:hover': { backgroundColor: themeColor('gray', 0) },
			...disabled
		},
		/** White variant */
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: themeColor(color, 7),
			'&:hover': { backgroundColor: 'White' },
			...disabled
		},
		gradient: {}
	};

	if (gradient) {
		/** Gradient variant */
		variants.gradient = {
			border: 'transparent',
			background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
			color: 'White'
		};
	}

	return variants;
};
