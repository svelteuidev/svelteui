import { dark, rgba } from '$lib/styles';
import type {
	DefaultProps,
	SvelteuiNumberSize,
	SvelteuiColor,
	SvelteuiGradient,
	VariantThemeFunction
} from '$lib/styles';

export interface ThemeIconProps extends DefaultProps {
	size: SvelteuiNumberSize;
	radius: SvelteuiNumberSize;
	color: SvelteuiColor;
	variant: ThemeIconVariant;
	gradient: SvelteuiGradient;
}

export type ThemeIconVariant = 'filled' | 'light' | 'gradient' | 'outline';

export const sizes = {
	xs: 16,
	sm: 20,
	md: 26,
	lg: 32,
	xl: 40
};

export function getVariantStyles(
	color: SvelteuiColor,
	variant: ThemeIconVariant,
	gradient: SvelteuiGradient
) {
	const ctx: SvelteuiGradient = { from: 'blue', to: 'cyan', deg: 45 };
	if (variant === 'gradient') return getVariant(color, gradient);
	return getVariant(color, ctx);
}

/**
 * getVariant function is a copy & paste of the vFunc function
 *
 * It is copied over because hover styles were removed
 *
 * Better implementation should be developed soon
 */
const getVariant = (color: SvelteuiColor, gradient: SvelteuiGradient): VariantThemeFunction => {
	const dtm = {
		lightBg: dark.colors[`${color}800`].value,
		lightHv: dark.colors[`${color}700`].value,
		outlineHv: dark.colors[`${color}400`].value,
		subtleHv: dark.colors[`${color}800`].value
	};

	return {
		/** Filled variant */
		filled: {
			[`${dark.selector} &`]: {
				backgroundColor: `$${color}800`
			},
			border: 'transparent',
			backgroundColor: `$${color}600`,
			color: 'White'
		},
		/** Light variant */
		light: {
			[`${dark.selector} &`]: {
				backgroundColor: rgba(dtm.lightBg, 0.35),
				color: color === 'dark' ? '$dark50' : `$${color}200`
			},
			border: 'transparent',
			backgroundColor: `$${color}50`,
			color: color === 'dark' ? '$dark900' : `$${color}600`
		},
		/** Outline variant */
		outline: {
			[`${dark.selector} &`]: {
				border: `1px solid $${color}400`,
				color: `$${color}400`
			},
			border: `1px solid $${color}700`,
			backgroundColor: 'transparent',
			color: `$${color}700`
		},
		/** Subtle variant */
		subtle: {
			[`${dark.selector} &`]: {
				color: color === 'dark' ? '$dark50' : `$${color}200`
			},
			border: 'transparent',
			backgroundColor: 'transparent',
			color: color === 'dark' ? '$dark900' : `$${color}600`
		},
		/** Default variant */
		default: {
			[`${dark.selector} &`]: {
				border: '1px solid $dark500',
				backgroundColor: '$dark500',
				color: 'White'
			},
			border: '1px solid $gray400',
			backgroundColor: 'White',
			color: 'Black'
		},
		/** White variant */
		white: {
			border: 'transparent',
			backgroundColor: 'White',
			color: `$${color}700`
		},
		/** Gradient variant */
		gradient: {
			border: 'transparent',
			background: `linear-gradient(${gradient.deg}deg, $${gradient.from}600 0%, $${gradient.to}600 100%)`,
			color: 'White'
		}
	};
};
