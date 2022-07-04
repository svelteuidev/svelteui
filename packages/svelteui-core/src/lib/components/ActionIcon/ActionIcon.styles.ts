import { vFunc, dark, createStyles } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader.styles';
import type { BoxProps } from '../Box';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUIGradient } from '$lib/styles';

export interface ActionIconProps extends BoxProps {
	color?: SvelteUIColor;
	variant?: ActionIconVariant;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize | number;
	loaderProps?: LoaderProps;
	loading?: boolean;
	disabled?: boolean;
	href?: string;
	external?: boolean;
}

export interface CloseButtonProps extends ActionIconProps {
	iconSize?: SvelteUINumberSize;
}

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconStylesParams {
	color: SvelteUIColor;
	size: SvelteUINumberSize;
	radius: SvelteUINumberSize;
	variant: ActionIconVariant;
}

export const sizes = {
	xs: 18,
	sm: 22,
	md: 28,
	lg: 34,
	xl: 44
};

export function getVariantStyles(color: SvelteUIColor, variant: ActionIconVariant) {
	const ctx: SvelteUIGradient = { from: 'indigo', to: 'cyan', deg: 45 };
	if (variant === 'hover' || variant === 'transparent') {
		return {
			[`${variant}`]: {
				[`${dark.selector} &`]: {
					color: `$${color}800`,
					'&:hover': { backgroundColor: variant === 'transparent' ? null : `$dark800` }
				},
				border: '1px solid transparent',
				backgroundColor: 'transparent',
				color: `$${color}700`,
				'&:hover': { backgroundColor: variant === 'transparent' ? null : `$${color}50` }
			}
		};
	}

	return vFunc(color, ctx);
}

export default createStyles((_, { color, radius, size, variant }: ActionIconStylesParams) => {
	return {
		root: {
			focusRing: 'auto',
			position: 'relative',
			appearance: 'none',
			WebkitAppearance: 'none',
			WebkitTapHighlightColor: 'transparent',
			boxSizing: 'border-box',
			height: typeof size === 'string' ? sizes[size] : `${size}px`,
			minHeight: typeof size === 'string' ? sizes[size] : `${size}px`,
			width: typeof size === 'string' ? sizes[size] : `${size}px`,
			minWidth: typeof size === 'string' ? sizes[size] : `${size}px`,
			borderRadius: `$${radius}`,
			padding: 0,
			lineHeight: 1,
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
			textDecoration: 'none',
			'&:not(:disabled):active': {
				transform: 'translateY(1px)'
			},
			'&.disabled': {
				pointerEvents: 'none',
				borderColor: 'transparent',
				backgroundColor: 'rgb(233, 236, 239)',
				background: 'rgb(233, 236, 239)',
				color: 'rgb(173, 181, 189)',
				cursor: 'not-allowed'
			},
			'&.loading': {
				'&::before': {
					content: '""',
					position: 'absolute',
					top: -1,
					left: -1,
					right: -1,
					bottom: -1,
					backgroundColor: 'rgba(255, 255, 255, .5)',
					borderRadius: `$${radius}`,
					cursor: 'not-allowed'
				}
			}
		},
		variants: {
			variation: getVariantStyles(color, variant)
		}
	};
});
