import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface RadioStyleParams {
	size: SvelteUISize;
	color: SvelteUIColor;
	radius: SvelteUINumberSize | number;
	labelDirection?: 'right' | 'bottom';
}

export const sizes = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 30,
	xl: 36
};

const iconSizes = {
	xs: 10,
	sm: 12,
	md: 14,
	lg: 16,
	xl: 20
};


const padding = {
	xs: 5,
	sm: 8,
	md: 10,
	lg: 11,
	xl: 12
};

export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};
export default createStyles(
	(theme, { color, radius, size, labelDirection }: RadioStyleParams, getRef) => {
		return {
			root: {
				display: 'flex',
				justifyItems: 'center',
				flexDirection: `${labelDirection == 'bottom' ? 'column' : 'row'}`,
				alignItems: 'center'
			},
			label: {
				ref: getRef('label'),
				boxSizing: 'border-box',
				color: theme.colors.black.value,
				[`${theme.dark} &`]: {
					color: theme.fn.themeColor('dark', 0)
				},
				display: 'flex',

				justifyContent: 'center',
				alignItems: 'center',
				userSelect: 'none',
				borderRadius: theme.fn.radius(radius),
				height: theme.fn.size({ size, sizes }),
				width: theme.fn.size({ size, sizes }),
				fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
				lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
				cursor: 'pointer',
				whiteSpace: 'nowrap',
				position: 'relative',
				WebkitTapHighlightColor: 'transparent',
					[`${theme.dark} &`]: {
						border: `1px solid ${theme.fn.themeColor('dark', 4)}`,
						backgroundColor: theme.fn.themeColor('dark', 6)
					},
					border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
					backgroundColor: theme.colors.white.value,
				'&:hover': {
					backgroundColor: theme.fn.themeColor('gray', 2)
				},
				[`${theme.dark} &:hover`]: {
					backgroundColor: theme.fn.themeColor('dark', 5)
				},
				'&.disabled': {
					backgroundColor: '$gray200',
					borderColor: '$gray300',
					cursor: 'not-allowed',
					[`${theme.dark} &`]: {
						color: theme.fn.themeColor('dark', 3) + '!important',
						backgroundColor: '$dark400',
						borderColor: '$dark600',
					}

				},
				'&.checked': {
					border: `1px solid ${theme.fn.themeColor(color, 5)}`,
					backgroundColor: theme.fn.themeColor(color, 6),
					'&::after': {
						position: 'absolute',
						width: theme.fn.size({ size, sizes }),
						height: theme.fn.size({ size, sizes }),
						backgroundColor: theme.colors.white.value,
						borderRadius: '50%',
						content: '',
						transform: 'scale(.4)',
					
					},
					'&.disabled': {
						backgroundColor: theme.fn.themeColor(color, 2),
						border: `1px solid ${theme.fn.themeColor(color, 2)}`,
					}
				}
			},
			labelText: {
				fontSize: fontSizes[size],
				marginTop: `${labelDirection == 'bottom' ? theme.fn.size({ size, sizes: padding }) + 'px' : '0'}`,
				marginLeft: `${labelDirection == 'right' ? theme.fn.size({ size, sizes: padding }) + 'px' : '0'}`,
				'&.disabled': {
					color: theme.fn.themeColor('gray', 5),
				}
			},
			inputContainer: {
				width: 0,
				height: 0,
				padding: 0,
				opacity: 0,
				margin: 0,
				overflow: 'hidden',
				'&:focus': {
					outline: 'none',

					[`& + .${getRef('label')}`]: {
						outline: 'none',
						[`${theme.dark} &`]: {
							boxShadow: `0 0 0 2px ${theme.fn.themeColor('dark', 9)}, 0 0 0 4px ${theme.colors.primary
								}`
						},
						boxShadow: `0 0 0 2px ${theme.colors.white.value}, 0 0 0 4px ${theme.colors.primary}`
					},
					'&:focus:not(:focus-visible)': {
						[`& + .${getRef('label')}`]: {
							boxShadow: 'none'
						}
					}
				}
			},
			input: {
				visibility: 'hidden'
			}
		};
	}
);
