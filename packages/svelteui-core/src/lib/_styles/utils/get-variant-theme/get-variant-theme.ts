import { rgba, dark, theme } from '../../index';
import type { SvelteuiColor, SvelteuiGradient } from '../../types';

export const vFunc = (color: SvelteuiColor, gradient: SvelteuiGradient) => {
	/** Dark Theme Mapping (dtm) is an object that contains the values needed for the rgba function
	 * it allows for there to be less clutter in the function
	 */
	const dtm = {
		lightBg: dark.colors[`${color}800`].value,
		lightHv: dark.colors[`${color}700`].value,
		outlineHv: dark.colors[`${color}400`].value,
		subtleHv: dark.colors[`${color}800`].value
	};
	const ltm = {
		outlineHv: theme.colors[`${color}50`].value
	};

	return {
		/** Filled variant */
		filled: {
			[`${dark.selector} &`]: {
				backgroundColor: `$${color}800`
			},
			border: 'transparent',
			backgroundColor: `$${color}600`,
			color: 'White',
			'&:hover': { backgroundColor: `$${color}700` }
		},
		/** Light variant */
		light: {
			[`${dark.selector} &`]: {
				backgroundColor: rgba(dtm.lightBg, 0.35),
				color: color === 'dark' ? '$dark50' : `$${color}200`,
				'&:hover': { backgroundColor: rgba(dtm.lightHv, 0.45) }
			},
			border: 'transparent',
			backgroundColor: `$${color}50`,
			color: color === 'dark' ? '$dark900' : `$${color}600`,
			'&:hover': { backgroundColor: `$${color}100` }
		},
		/** Outline variant */
		outline: {
			[`${dark.selector} &`]: {
				border: `1px solid $${color}400`,
				color: `$${color}400`,
				'&:hover': { backgroundColor: rgba(dtm.outlineHv, 0.05) }
			},
			border: `1px solid $${color}700`,
			backgroundColor: 'transparent',
			color: `$${color}700`,
			'&:hover': {
				backgroundColor: rgba(ltm.outlineHv, 0.35)
			}
		},
		/** Subtle variant */
		subtle: {
			[`${dark.selector} &`]: {
				color: color === 'dark' ? '$dark50' : `$${color}200`,
				'&:hover': { backgroundColor: rgba(dtm.subtleHv, 0.35) }
			},
			border: 'transparent',
			backgroundColor: 'transparent',
			color: color === 'dark' ? '$dark900' : `$${color}600`,
			'&:hover': {
				backgroundColor: `$${color}50`
			}
		},
		/** Default variant */
		default: {
			[`${dark.selector} &`]: {
				border: '1px solid $dark500',
				backgroundColor: '$dark500',
				color: 'White',
				'&:hover': { backgroundColor: '$dark400' }
			},
			border: '1px solid $gray400',
			backgroundColor: 'White',
			color: 'Black',
			'&:hover': { backgroundColor: '$gray50' }
		},
		/** White variant */
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: `$${color}700`,
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
