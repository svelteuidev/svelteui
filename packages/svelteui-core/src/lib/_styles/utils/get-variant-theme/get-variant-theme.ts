import type { SvelteuiThemeBase, SvelteuiColor, SvelteuiGradient } from '../../types';

interface GetSharedColorScheme {
	color?: SvelteuiColor;
	variant: 'outline' | 'filled' | 'light' | 'gradient' | 'white' | 'default' | 'subtle';
	gradient?: { from: SvelteuiColor; to: SvelteuiColor; deg: number };
	theme: SvelteuiThemeBase;
}

export const vFunc = (color: SvelteuiColor, gradient: SvelteuiGradient) => {
	return {
		filled: {
			border: 'transparent',
			backgroundColor: `$${color}600`,
			color: 'White',
			'&:hover': { backgroundColor: `$${color}700` }
		},
		light: {
			border: 'transparent',
			backgroundColor: `$${color}50`,
			color: color === 'dark' ? '$dark900' : `$${color}600`,
			'&:hover': { backgroundColor: `$${color}100` }
		},
		outline: {
			border: `1px solid $${color}700`,
			backgroundColor: 'transparent',
			color: `$${color}700`,
			'&:hover': {
				backgroundColor: `$${color}50`
			}
		},
		subtle: {
			border: 'transparent',
			backgroundColor: 'transparent',
			color: color === 'dark' ? '$dark900' : `$${color}600`,
			'&:hover': {
				backgroundColor: `$${color}50`
			}
		},
		default: {
			border: '1px solid $border-default',
			backgroundColor: '$background-default',
			color: '$color-default',
			'&:hover': { backgroundColor: '$hover-default' }
		},
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: `$${color}700`,
			'&:hover': { backgroundColor: 'White' }
		},
		gradient: {
			border: 'transparent',
			background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
			color: 'White'
		}
	};
};
