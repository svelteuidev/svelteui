import { createStyles } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface CheckboxStyleParams {
	size: SvelteUISize;
	color: SvelteUIColor;
	radius: SvelteUINumberSize | number;
	transitionDuration: number;
}

export const sizes = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 30,
	xl: 36
};

export const iconSizes = {
	xs: 8,
	sm: 10,
	md: 14,
	lg: 16,
	xl: 20
};

export default createStyles(
	(theme, { color, radius, size, transitionDuration }: CheckboxStyleParams, getRef) => {
		return {
			root: {
				display: 'flex',
				alignItems: 'center'
			},

			inner: {
				position: 'relative',
				width: sizes[size],
				height: sizes[size]
			},

			label: {
				cursor: 'pointer',
				WebkitTapHighlightColor: 'transparent',
				paddingLeft: theme.fn.size({ size, sizes: theme.space }),
				fontSize: `$${size}`,
				lineHeight: `$${size}`,
				color: '#000000',
				fontFamily: theme.fonts.standard.value ?? 'sans-serif',
				darkMode: {
					color: '$dark000'
				}
			},
			input: {
				cursor: 'pointer',
				appearance: 'none',
				backgroundColor: '#ffffff',
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '$gray400',
				width: sizes[size],
				height: sizes[size],
				borderRadius: `$${radius}`,
				padding: 0,
				display: 'block',
				margin: 0,
				transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,

				darkMode: {
					'&:not(:checked)': {
						backgroundColor: '$dark400',
						borderColor: '$dark400'
					}
				},

				'&:checked': {
					border: 'transparent',
					backgroundColor: theme.fn.themeColor(color, 6),
					color: '#ffffff',
					borderRadius: `$${radius}`,

					[`& + .${getRef('iconWrapper')}`]: {
						opacity: 1,
						transform: 'translateY(0) scale(1)'
					}
				},

				'&:disabled': {
					backgroundColor: '$gray200',
					borderColor: '$gray300',
					cursor: 'not-allowed',

					[`& + .${getRef('iconWrapper')}`]: {
						color: '$gray500',
						backgroundColor: '$gray200',
						borderColor: '$gray300'
					},

					darkMode: {
						backgroundColor: '$dark400',
						borderColor: '$dark600',
						[`& + .${getRef('icon')}`]: {
							color: '$dark600'
						}
					}
				}
			},

			iconWrapper: {
				ref: getRef('iconWrapper'),
				color: '#ffffff',
				transform: 'translateY(5px) scale(0.5)',
				opacity: 0,
				transitionProperty: 'opacity, transform',
				transitionTimingFunction: 'ease',
				transitionDuration: `${transitionDuration}ms`,
				pointerEvents: 'none',
				width: sizes[size],
				height: sizes[size],
				minWidth: sizes[size],
				minHeight: sizes[size],
				borderRadius: `$${radius}`,
				position: 'absolute',
				zIndex: 1,
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				margin: 'auto',
				'@media (prefers-reduced-motion)': {
					transitionDuration: '0ms'
				}
			},

			icon: {
				ref: getRef('icon'),
				color: '#ffffff',
				width: iconSizes[size],
				height: iconSizes[size],
				minWidth: iconSizes[size],
				minHeight: iconSizes[size],

				'@media (prefers-reduced-motion)': {
					transitionDuration: '0ms'
				}
			}
		};
	}
);
