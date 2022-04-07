import type { SvelteuiColor, SvelteuiNumberSize, SvelteuiSize } from '$lib/styles';

export interface SwitchStylesProps {
	color: SvelteuiColor;
	size: SvelteuiSize;
	radius: SvelteuiNumberSize;
}

export type SwitchTimingFunction =
	| 'linear'
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-start'
	| 'step-end';

export const radius = {
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
