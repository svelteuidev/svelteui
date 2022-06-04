import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import type { Component } from '$lib/internal';

export interface InputBaseProps extends DefaultProps {
	icon: Component | HTMLOrSVGElement;
	iconWidth: number;
	iconProps: { size: number; color: 'currentColor' | string };
	showRightSection: boolean;
	rightSectionWidth: number;
	rightSectionProps: Record<string, unknown>;
	wrapperProps: Record<string, unknown>;
	placeholder: string;
	id: string;
	required: boolean;
	radius: SvelteUINumberSize;
	variant: InputVariant;
	disabled: boolean;
	size: SvelteUISize;
	root: Component | keyof HTMLElementTagNameMap;
	value: string;
}

export interface InputProps extends InputBaseProps {
	invalid?: boolean;
	multiline?: boolean;
}

interface InputStylesParams {
	icon: Component | HTMLOrSVGElement;
	radius: SvelteUINumberSize;
	size: SvelteUISize;
	variant: InputVariant;
	multiline: boolean;
	invalid: boolean;
	rightSectionWidth: number;
	showRightSection: boolean;
	iconWidth: number;
}

export type InputVariant = 'default' | 'filled' | 'unstyled' | 'headless';

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
			variant,
			showRightSection
		}: InputStylesParams
	) => {
		return {
			root: {
				[`${theme.dark} &`]: {
					'& .input':
						variant === 'headless'
							? {}
							: {
									color: '$dark50'
							  },
					'&:disabled': {
						backgroundColor: '$dark600'
					},
					'&::placeholder': {
						color: '$dark300'
					}
				},
				position: 'relative'
			},
			input:
				variant === 'headless'
					? {}
					: {
							height: multiline
								? variant === 'unstyled'
									? undefined
									: 'auto'
								: typeof size === 'number'
								? `${size}px`
								: sizes[size] ?? sizes.md,
							WebkitTapHighlightColor: 'transparent',
							lineHeight: multiline ? '$md' : `${sizes[size] - 2}px`,
							appearance: 'none',
							resize: 'none',
							boxSizing: 'border-box',
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
								backgroundColor: '$gray100',
								color: '$dark200',
								opacity: 0.6,
								cursor: 'not-allowed',

								'&::placeholder': {
									color: '$dark200'
								}
							},

							'&::placeholder': {
								opacity: 1,
								userSelect: 'none',
								color: '$gray500'
							},

							'&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
								{
									appearance: 'none'
								},

							'&[type=number]': {
								MozAppearance: 'textfield'
							},
							'&.defaultVariant': {
								[`${theme.dark} &`]: {
									border: `1px solid $dark500`,
									backgroundColor: '$dark800',
									'&:focus, &:focus-within': {
										borderColor: '$blue800'
									}
								},
								border: `1px solid $gray400`,
								backgroundColor: 'White',
								transition: 'border-color 100ms ease',

								'&:focus, &:focus-within': {
									outline: 'none',
									borderColor: '$blue500'
								}
							},

							'&.filledVariant': {
								[`${theme.dark} &`]: {
									backgroundColor: '$dark500',
									'&:focus, &:focus-within': {
										borderColor: '$blue800 !important'
									}
								},
								border: '1px solid transparent',
								backgroundColor: '$gray100',

								'&:focus, &:focus-within': {
									outline: 'none',
									borderColor: `$blue500 !important`
								}
							},

							'&.unstyledVariant': {
								[`${theme.dark} &`]: {
									color: '$dark50'
								},
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
							}
					  },

			withIcon: {
				paddingLeft: typeof iconWidth === 'number' ? iconWidth : sizes[size] ?? sizes.md
			},
			invalid: {
				[`${theme.dark} &`]: {
					color: '$red600 !important',
					borderColor: '$red600 !important',
					'&::placeholder': {
						color: '$red600 !important'
					}
				},
				color: '$red700 !important',
				borderColor: '$red700 !important',

				'&::placeholder': {
					opacity: 1,
					color: '$red700 !important'
				}
			},
			disabled: {
				[`${theme.dark} &`]: {
					backgroundColor: '$dark600 !important'
				},
				backgroundColor: '$gray100 !important',
				color: '$dark200 !important',
				opacity: 0.6,
				cursor: 'not-allowed',

				'&::placeholder': {
					color: '$dark200 !important'
				}
			},
			icon: {
				[`${theme.dark} &`]: {
					color: invalid ? 'red600' : '$dark200'
				},
				pointerEvents: 'none',
				position: 'absolute',
				zIndex: 1,
				left: 0,
				top: 8,
				bottom: 0,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: sizes[size] ?? sizes.md,
				color: invalid ? '$red700' : '$gray500'
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
			}
		};
	}
);
