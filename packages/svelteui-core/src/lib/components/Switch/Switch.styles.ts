import { createStyles } from '$lib/styles';
import type { DefaultProps, Override, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface SwitchProps extends DefaultProps<HTMLInputElement> {
	override?: Override['props'];
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	transitionFunction?: SwitchTimingFunction;
	className?: string;
	id?: string;
	label?: string;
	onLabel?: string;
	offLabel?: string;
	disabled?: boolean;
	checked?: boolean;
}

interface SwitchStyleParams {
	color: SvelteUIColor;
	radius: SvelteUINumberSize;
	size: SvelteUINumberSize;
	transitionFunction: SwitchTimingFunction;
	onLabel: string;
	offLabel: string;
}
export type SwitchTimingFunction =
	| 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-start'
	| 'step-end';

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
					transition: `color 150ms ${transitionFunction}`
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
				'&:disabled': {
					backgroundColor: 'Gray',
					borderColor: 'White',
					cursor: 'not-allowed',

					'&::before': {
						borderColor: 'White',
						backgroundColor: 'Gray'
					}
				}
			},
			label: {
				fontSize: sizes[size].labelFont,
				lineHeight: `${sizes[size].height}px`,
				fontWeight: 600
			}
		};
	}
);
