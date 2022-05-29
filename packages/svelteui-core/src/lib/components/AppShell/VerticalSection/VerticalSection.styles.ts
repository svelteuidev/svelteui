import { createStyles } from '$lib/styles';
import type { DefaultProps } from '$lib/styles';

export interface VerticalSectionSharedProps extends DefaultProps {
	height: number | string;
	fixed?: boolean;
	position?: VerticalSectionPosition;
	zIndex?: number;
}

export interface VerticalSectionProps extends VerticalSectionSharedProps {
	section: 'header' | 'footer';
}

export interface VerticalSectionPosition {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}

interface VerticalSectionStyles {
	height: number | string;
	fixed: boolean;
	position: VerticalSectionPosition;
	zIndex: number;
	borderPosition: 'top' | 'bottom';
}

export default createStyles(
	(
		theme,
		{ height, borderPosition, fixed, position, zIndex }: VerticalSectionStyles,
		dark,
		ctx
	) => {
		const { themeColor } = ctx.fns;
		return {
			root: {
				[`${dark.selector} &`]: {
					backgroundColor: themeColor('dark', 7),
					borderBottom:
						borderPosition === 'bottom' ? `1px solid ${themeColor('dark', 5)}` : undefined,
					borderTop: borderPosition === 'top' ? `1px solid ${themeColor('dark', 5)}` : undefined
				},
				...position,
				zIndex,
				height,
				fontFamily: '$standard' || 'sans-serif',
				maxHeight: height,
				position: fixed ? 'fixed' : 'static',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				borderBottom:
					borderPosition === 'bottom' ? `1px solid ${themeColor('gray', 2)}` : undefined,
				borderTop: borderPosition === 'top' ? `1px solid ${themeColor('gray', 2)}` : undefined
			}
		};
	}
);
