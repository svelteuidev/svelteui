import { dark, rgba } from '$lib/styles';
import type {
	DefaultProps,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiNumberSize,
	SvelteuiSize,
	VariantThemeFunction
} from '$lib/styles';

export interface BadgeProps extends DefaultProps {
	color?: SvelteuiColor;
	variant?: BadgeVariant;
	gradient?: SvelteuiGradient;
	size?: SvelteuiSize;
	radius?: SvelteuiNumberSize;
	fullWidth?: boolean;
}

export type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

export const sizes = {
	xs: {
		fontSize: 9,
		height: 16
	},
	sm: {
		fontSize: 10,
		height: 18
	},
	md: {
		fontSize: 11,
		height: 20
	},
	lg: {
		fontSize: 13,
		height: 26
	},
	xl: {
		fontSize: 16,
		height: 32
	}
} as const;

export const dotSizes = {
	xs: 4,
	sm: 4,
	md: 6,
	lg: 8,
	xl: 10
};

export function getVariantStyles(
	color: SvelteuiColor,
	variant: BadgeVariant,
	size: number | string,
	gradient: SvelteuiGradient
) {
	const dotSize = typeof size === 'number' ? `${size}px` : dotSizes[size] || dotSizes.md;
	const ctx: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	if (variant === 'dot') {
		return {
			dot: {
				[`${dark.selector} &`]: {
					color: `$${color}800`,
					border: '1px solid $dark300',
					'&::before': {
						backgroundColor: `$${color}400`
					}
				},
				backgroundColor: 'transparent',
				color: '$gray700',
				border: '1px solid $gray300',
				paddingLeft: typeof size === 'number' ? `${size}px` : `$${size}`,

				'&::before': {
					content: '""',
					display: 'block',
					width: dotSize,
					height: dotSize,
					borderRadius: dotSize,
					backgroundColor: `$${color}600`,
					marginRight: dotSize
				}
			}
		};
	}

	if (variant === 'gradient') return getVariant(color, gradient);
	return getVariant(color, ctx);
}

export const getVariant = (
	color: SvelteuiColor,
	gradient: SvelteuiGradient
): VariantThemeFunction => {
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
