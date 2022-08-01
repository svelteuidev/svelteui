import { createStyles, vFunc } from '$lib/styles';
import type {
	SvelteUIColor,
	SvelteUINumberSize,
	SvelteUIGradient,
	DefaultProps
} from '$lib/styles';
import type { LoaderPropsExtended } from '../Loader/Loader.styles';

export interface ButtonProps extends DefaultProps<HTMLButtonElement | HTMLAnchorElement> {
	variant?: ButtonVariant;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize | number;
	gradient?: SvelteUIGradient;
	loaderPosition?: 'left' | 'right';
	loaderProps?: LoaderProps;
	href?: string;
	external?: boolean;
	disabled?: boolean;
	compact?: boolean;
	loading?: boolean;
	uppercase?: boolean;
	fullSize?: boolean;
	ripple?: boolean;
}

export type ButtonVariant =
	| 'filled'
	| 'light'
	| 'outline'
	| 'default'
	| 'white'
	| 'gradient'
	| 'subtle';

export interface ButtonStylesParams {
	variant: ButtonVariant;

	color: SvelteUIColor;
	size: SvelteUINumberSize;
	radius: SvelteUINumberSize;
	fullSize: boolean;
	compact: boolean;
	gradient: SvelteUIGradient;
}

export interface GetVariantStyles {
	color: SvelteUIColor;
	variant: ButtonVariant;
	gradient?: { from: SvelteUIColor; to: SvelteUIColor; deg: number };
}

export interface LoaderProps {
	variant: LoaderPropsExtended['variant'];
	color: LoaderPropsExtended['color'];
	size: LoaderPropsExtended['size'];
}

export const sizes = {
	xs: {
		height: 30,
		padding: '0px 14px'
	},
	sm: {
		height: 36,
		padding: '0px 18px'
	},
	md: {
		height: 42,
		padding: '0px 22px'
	},
	lg: {
		height: 50,
		padding: '0px 26px'
	},
	xl: {
		height: 60,
		padding: '0px 32px'
	},
	'compact-xs': {
		height: 22,
		padding: '0 7px'
	},

	'compact-sm': {
		height: 26,
		padding: '0 8px'
	},

	'compact-md': {
		height: 30,
		padding: '0 10px'
	},

	'compact-lg': {
		height: 34,
		padding: '0 12px'
	},

	'compact-xl': {
		height: 40,
		padding: '0 14px'
	}
};

export default createStyles(
	(theme, { color, compact, fullSize, gradient, radius, size, variant }: ButtonStylesParams) => {
		return {
			root: {
				focusRing: 'auto',
				cursor: 'pointer',
				position: 'relative',
				boxSizing: 'border-box',
				textDecoration: 'none',
				outline: 'none',
				userSelect: 'none',
				appearance: 'none',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: null,
				borderRadius: typeof radius === 'number' ? radius : `$${radius}`,
				height:
					typeof size === 'number' ? `${size}px` : sizes[compact ? `compact-${size}` : size].height,
				padding:
					typeof size === 'number'
						? `0px ${size}px`
						: sizes[compact ? `compact-${size}` : size].padding,
				fontFamily: '$standard',
				fontWeight: '$SemiBold',
				fontSize: `$${size}`,
				lineHeight: 1,
				flexGrow: 0,
				width: fullSize ? '100%' : 'auto',
				'&:hover': {
					backgroundColor: variant === 'gradient' ? null : theme.fn.themeColor(color, 7),
					backgroundSize: variant === 'gradient' ? '200%' : null
				},
				'&:active': {
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
					pointerEvents: 'none',
					'&::before': {
						content: '""',
						position: 'absolute',
						inset: -1,
						backgroundColor: 'rgba(255, 255, 255, .5)',
						borderRadius: `$${radius}`,
						cursor: 'not-allowed'
					}
				}
			},
			variants: {
				variation: vFunc(color, gradient)
			}
		};
	}
);
