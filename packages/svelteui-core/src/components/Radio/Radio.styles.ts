import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface RadioStyleParams {
	size: SvelteUISize;
	color: SvelteUIColor;
	radius: SvelteUINumberSize | number;
	transitionDuration: number;
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

const checkedPadding = {
	xs: 6,
	sm: 7,
	md: 8.5,
	lg: 10,
	xl: 10
};


export const fontSizes = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};
export default createStyles(
	(theme, { color, radius, size, transitionDuration, labelDirection }: RadioStyleParams, getRef) => {
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
				border: '1px solid transparent',
				borderRadius: theme.fn.radius(radius),
				height: theme.fn.size({ size, sizes }),
				width: theme.fn.size({ size, sizes }),
				fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
				lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
				cursor: 'pointer',

				whiteSpace: 'nowrap',
				position: 'relative',
				transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,
				WebkitTapHighlightColor: 'transparent',

				'&.outline': {
					[`${theme.dark} &`]: {
						border: `1px solid ${theme.fn.themeColor('dark', 4)}`,
						backgroundColor: theme.fn.themeColor('dark', 6)
					},
					border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
					backgroundColor: theme.colors.white.value
				},

				'&.filled': {
					[`${theme.dark} &`]: {
						backgroundColor: theme.fn.themeColor('dark', 4)
					},
					backgroundColor: theme.fn.themeColor('gray', 1)
				},
				'&:hover': {
					backgroundColor: theme.fn.themeColor('gray', 2)
				},
				[`${theme.dark} &:hover`]: {
					backgroundColor: theme.fn.themeColor('dark', 5)
				},
				'&.disabled': {
					backgroundColor: `${theme.fn.themeColor('gray', 1)} !important`,
					borderColor: `${theme.fn.themeColor('gray', 1)} !important`,
					color: theme.fn.themeColor('gray', 5),
					[`${theme.dark} &`]: {
						backgroundColor: `${theme.fn.themeColor('dark', 5)} !important`,
						borderColor: `${theme.fn.themeColor('dark', 5)} !important`,
						color: theme.fn.themeColor('dark', 3)
					},
					cursor: 'not-allowed',

				},

				'&.checked': {
					'&::after': {
						position: 'absolute',
						width: theme.fn.size({ size, sizes }),
						height: theme.fn.size({ size, sizes }),
						backgroundColor: theme.colors.white.value,
						borderRadius: '50%',
						content: '',
						transform: 'scale(.4)'

					},
					'&.outline': {
						border: `1px solid ${theme.fn.themeColor(color, 5)}`,
						backgroundColor: theme.fn.variant({ color, variant: 'light' }).background[0],
					},

					'&.filled': {
						[`${theme.dark} &`]: {
							backgroundColor: theme.fn.variant({ color, variant: 'light' }).background[0],
							'&:hover': {
								backgroundColor: theme.fn.variant({ color, variant: 'light' }).background[0]
							}
						},
						backgroundColor: theme.fn.themeColor(color, 1),
						'&:hover': {
							backgroundColor: theme.fn.themeColor(color, 2)
						}
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
