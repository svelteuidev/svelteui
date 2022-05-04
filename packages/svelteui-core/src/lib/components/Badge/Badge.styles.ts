import { vFunc, dark } from '$lib/styles';
import type {
	DefaultProps,
	SvelteuiColor,
	SvelteuiGradient,
	SvelteuiNumberSize,
	SvelteuiSize
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

export function getVariantStyles(color: SvelteuiColor, variant: BadgeVariant) {
	const ctx: SvelteuiGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	if (variant === 'dot') {
		return {
			[`${variant}`]: {
				[`${dark.selector} &`]: {
					color: `$${color}800`,
					'&:hover': { backgroundColor: variant === 'dot' ? null : `$dark800` }
				},
				border: '1px solid transparent',
				backgroundColor: 'transparent',
				color: `$${color}700`,
				'&:hover': { backgroundColor: variant === 'dot' ? null : `$${color}50` }
			}
		};
	}

	return vFunc(color, ctx);
}
