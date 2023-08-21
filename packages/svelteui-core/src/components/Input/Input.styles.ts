import { createStyles } from '$lib/styles';
import type { Component } from '$lib/internal';
import type { CSS, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import type { InputVariant } from './Input';

export interface InputStylesParams {
	icon: Component | HTMLOrSVGElement;
	radius: SvelteUINumberSize;
	size: SvelteUISize;
	resize: CSS['resize'];
	variant: InputVariant;
	multiline: boolean;
	invalid: boolean;
	rightSectionWidth: number | string;
	showRightSection: boolean;
	iconWidth: number;
}

export const sizes = {
	xs: 30,
	sm: 36,
	md: 42,
	lg: 50,
	xl: 60
};

export default createStyles(
	(
		theme,
		{
			icon,
			iconWidth,
			invalid,
			multiline,
			radius,
			rightSectionWidth,
			size,
			resize,
			variant,
			showRightSection
		}: InputStylesParams
	) => {
		return {
			root: {
				darkMode: {
					'&:disabled': {
						backgroundColor: theme.fn.themeColor('dark', 6)
					},
					'&::placeholder': {
						color: theme.fn.themeColor('dark', 3)
					}
				},
				position: 'relative'
			},
			input:
				variant !== 'headless'
					? {
							height: multiline
								? 'auto'
								: typeof size === 'number'
								? `${size}px`
								: sizes[size] ?? sizes.md,
							WebkitTapHighlightColor: 'transparent',
							lineHeight: multiline ? '$md' : `${sizes[size] - 2}px`,
							appearance: 'none',
							resize,
							boxSizing: 'border-box',
							fontFamily: theme.fonts.standard.value ?? 'sans-serif',
							fontSize: typeof size === 'number' ? `${size}px` : `${size}`,
							width: '100%',
							color: 'Black',
							display: 'block',
							textAlign: 'left',
							minHeight:
								variant === 'default' || variant === 'filled' ? sizes[size] ?? sizes.md : null,
							paddingLeft:
								(variant === 'default' && icon) || (variant === 'filled' && icon)
									? sizes[size] ?? sizes.md / 3
									: 12,
							paddingRight:
								variant === 'default' || variant === 'filled'
									? showRightSection
										? rightSectionWidth
										: null
									: null,
							borderRadius: variant === 'default' || variant === 'filled' ? `$${radius}` : null,

							'&:disabled': {
								backgroundColor: theme.fn.themeColor('gray', 1),
								color: theme.fn.themeColor('dark', 2),
								opacity: 0.6,
								cursor: 'not-allowed',

								'&::placeholder': {
									color: theme.fn.themeColor('dark', 2)
								}
							},

							'&::placeholder': {
								opacity: 1,
								userSelect: 'none',
								color: theme.fn.themeColor('gray', 5)
							},

							'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
								{
									appearance: 'none'
								},

							'&[type=number]': {
								MozAppearance: 'textfield'
							},

							darkMode: {
								color: theme.fn.themeColor('dark', 0)
							}
					  }
					: {},
			defaultVariant: {
				border: `1px solid ${theme.fn.themeColor('gray', 4)}`,
				backgroundColor: 'White',
				transition: 'border-color 100ms ease',
				minHeight: sizes[size] ?? sizes.md,

				'&:focus, &:focus-within': {
					outline: 'none',
					borderColor: theme.fn.themeColor('blue', 5)
				},

				darkMode: {
					border: `1px solid ${theme.fn.themeColor('dark', 5)}`,
					backgroundColor: theme.fn.themeColor('dark', 8),
					'&:focus, &:focus-within': {
						borderColor: theme.fn.themeColor('blue', 8)
					}
				}
			},
			filledVariant: {
				border: '1px solid transparent',
				backgroundColor: theme.fn.themeColor('gray', 1),
				minHeight: sizes[size] ?? sizes.md,

				'&:focus, &:focus-within': {
					outline: 'none',
					borderColor: `${theme.fn.themeColor('blue', 5)} !important`
				},

				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 5),
					'&:focus, &:focus-within': {
						borderColor: `${theme.fn.themeColor('blue', 8)} !important`
					}
				}
			},
			unstyledVariant: {
				height: multiline ? undefined : 'auto',
				borderWidth: 0,
				color: 'Black',
				backgroundColor: 'transparent',
				minHeight: 28,
				outline: 0,

				'&:focus, &:focus-within': {
					outline: 'none',
					borderColor: 'transparent'
				},

				'&:disabled': {
					backgroundColor: 'transparent',

					'&:focus, &:focus-within': {
						outline: 'none',
						borderColor: 'transparent'
					}
				}
			},
			withIcon: {
				paddingLeft: typeof iconWidth === 'number' ? `${iconWidth}px` : sizes[size] ?? sizes.md
			},
			iconWrapper: {
				pointerEvents: 'none',
				position: 'absolute',
				zIndex: 1,
				left: 0,
				top: 0,
				bottom: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: iconWidth ? `${iconWidth}px` : sizes[size] ?? sizes.md
			},
			disabled: {
				backgroundColor: theme.fn.themeColor('gray', 1),
				color: theme.fn.themeColor('dark', 2),
				opacity: 0.6,
				cursor: 'not-allowed',

				'&::placeholder': {
					color: theme.fn.themeColor('dark', 2)
				},

				darkMode: {
					backgroundColor: theme.fn.themeColor('dark', 6),
					borderColor: theme.fn.themeColor('dark', 4)
				}
			},
			invalid: {
				color: theme.fn.themeColor('red', 7),
				borderColor: theme.fn.themeColor('red', 7),

				'&::placeholder': {
					opacity: 1,
					color: theme.fn.themeColor('red', 7)
				},

				darkMode: {
					color: theme.fn.themeColor('red', 6),
					borderColor: theme.fn.themeColor('red', 6),
					'&::placeholder': {
						color: theme.fn.themeColor('red', 6)
					}
				}
			},
			icon: {
				color: invalid ? theme.fn.themeColor('red', 7) : theme.fn.themeColor('gray', 5),
				pointerEvents: 'none',
				darkMode: {
					color: invalid ? theme.fn.themeColor('red', 6) : theme.fn.themeColor('dark', 2)
				}
			},
			rightSection: {
				position: 'absolute',
				top: 0,
				bottom: 0,
				right: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: rightSectionWidth
			},
			noPointerEvents: {
				pointerEvents: 'none'
			}
		};
	}
);
