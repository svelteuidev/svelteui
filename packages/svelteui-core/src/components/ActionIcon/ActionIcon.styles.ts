import { fns, dark, createStyles, vFunc } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUIGradient } from '$lib/styles';
import type { ActionIconVariant } from './ActionIcon';

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

export function getVariantStyles(color: SvelteUIColor) {
	const { themeColor } = fns;
	const variants = vFunc(color);

	return {
		...variants,
		hover: {
			[`${dark.selector} &`]: {
				color: themeColor(color, 8),
				'&:hover': { backgroundColor: themeColor('dark', 8) }
			},
			border: '1px solid transparent',
			backgroundColor: 'transparent',
			color: themeColor(color, 7),
			'&:hover': { backgroundColor: themeColor(color) }
		},
		transparent: {
			[`${dark.selector} &`]: {
				color: themeColor(color, 8),
				'&:hover': { backgroundColor: null }
			},
			border: '1px solid transparent',
			backgroundColor: 'transparent',
			color: themeColor(color, 7),
			'&:hover': { backgroundColor: null }
		}
	};
}

export default createStyles((theme, { color, radius, size, variant }: ActionIconStylesParams) => {
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
			'&:disabled': {
				pointerEvents: 'none',
				borderColor: 'transparent',
				background: theme.fn.themeColor('gray', 2),
				backgroundColor: theme.fn.themeColor('gray', 2),
				color: theme.fn.themeColor('gray', 5),
				cursor: 'not-allowed'
			}
		},
		loading: {
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
		},
		variants: {
			variation: getVariantStyles(color)
		}
	};
});
