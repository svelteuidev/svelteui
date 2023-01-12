import { createStyles, dark } from '$lib/styles';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { SwitchTimingFunction } from './Switch';

export interface SwitchStyleParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	size: SvelteUINumberSize;
	transitionFunction: SwitchTimingFunction;
	onLabel: string;
	offLabel: string;
}

export const radii = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
};

export const sizes = {
	xs: {
		height: 16,
		width: 30,
		handle: 12,
		labelFont: 12,
		insideLabelFont: 5
	},
	sm: {
		height: 20,
		width: 38,
		handle: 14,
		labelFont: 14,
		insideLabelFont: 6
	},
	md: {
		height: 24,
		width: 46,
		handle: 18,
		labelFont: 16,
		insideLabelFont: 7
	},
	lg: {
		height: 30,
		width: 56,
		handle: 22,
		labelFont: 18,
		insideLabelFont: 9
	},
	xl: {
		height: 36,
		width: 68,
		handle: 28,
		labelFont: 20,
		insideLabelFont: 11
	}
};

export default createStyles(
	(theme, { radius, size, transitionFunction, color, offLabel, onLabel }: SwitchStyleParams) => {
		return {
			root: {
				display: 'flex',
				alignItems: 'center'
			},
			input: {
				focusRing: 'auto',
				overflow: 'hidden',
				WebkitTapHighlightColor: 'transparent',
				position: 'relative',
				borderRadius: radii[radius],
				backgroundColor: theme.fn.themeColor('gray', 2),
				border: `1px solid ${theme.fn.themeColor('gray', 3)}`,
				height: sizes[size].height,
				width: sizes[size].width,
				minWidth: sizes[size].width,
				margin: 0,
				transitionProperty: 'background-color, border-color',
				transitionTimingFunction: transitionFunction,
				transitionDuration: '150ms',
				boxSizing: 'border-box',
				appearance: 'none',
				display: 'flex',
				alignItems: 'center',
				fontSize: sizes[size].insideLabelFont,
				fontWeight: 600,

				[`${dark.selector} &`]: {
					backgroundColor: theme.fn.themeColor('dark', 6),
					borderColor: theme.fn.themeColor('dark', 4)
				},

				'&:hover': { cursor: 'pointer' },
				'&::before': {
					zIndex: 1,
					borderRadius: radii[radius],
					boxSizing: 'border-box',
					content: "''",
					display: 'block',
					backgroundColor: 'White',
					border: `1px solid ${theme.fn.themeColor('gray', 3)}`,
					height: sizes[size].handle,
					width: sizes[size].handle,
					transition: `transform 150ms ${transitionFunction}`,
					transform: `translateX(${size === 'xs' ? 1 : 2}px)`,

					'@media (prefers-reduced-motion)': {
						transitionDuration: '0ms'
					},

					[`${dark.selector} &`]: {
						borderColor: 'White'
					}
				},
				'&::after': {
					position: 'absolute',
					zIndex: 0,
					display: 'flex',
					height: '100%',
					alignItems: 'center',
					lineHeight: 0,
					right: '10%',
					transform: 'translateX(0)',
					content: offLabel ? `'${offLabel}'` : "''",
					color: theme.fn.themeColor('gray', 6),
					transition: `color 150ms ${transitionFunction}`,

					[`${dark.selector} &`]: {
						color: theme.fn.themeColor('dark', 1)
					}
				},
				'&:checked': {
					backgroundColor: theme.fn.themeColor(color, 6),
					borderColor: theme.fn.themeColor(color, 6),

					'&::before': {
						transform: `translateX(${
							sizes[size].width - sizes[size].handle - (size === 'xs' ? 3 : 4)
						}px)`,
						borderColor: 'White'
					},

					'&::after': {
						transform: 'translateX(-200%)',
						content: onLabel ? `'${onLabel}'` : "''",
						color: 'White'
					}
				},
				'&.disabled': {
					backgroundColor: theme.fn.themeColor('gray', 2),
					borderColor: theme.fn.themeColor('gray', 2),
					cursor: 'not-allowed',

					[`${dark.selector} &`]: {
						backgroundColor: theme.fn.themeColor('dark', 4),
						borderColor: theme.fn.themeColor('dark', 3)
					},

					'&::before': {
						borderColor: theme.fn.themeColor('gray', 2),
						backgroundColor: theme.fn.themeColor('gray', 0),

						[`${dark.selector} &`]: {
							backgroundColor: theme.fn.themeColor('dark', 3),
							borderColor: theme.fn.themeColor('dark', 4)
						}
					}
				}
			},
			label: {
				fontSize: sizes[size].labelFont,
				lineHeight: `${sizes[size].height}px`,
				fontWeight: 600,
				paddingLeft: theme.fn.size({ size: 'sm', sizes: theme.space })
			}
		};
	}
);
