import { createStyles } from '$lib/styles-old';
import type { VerticalSectionPosition } from './VerticalSection';

interface VerticalSectionStyles {
	height: number | string;
	fixed: boolean;
	position: VerticalSectionPosition;
	zIndex: number;
	borderPosition: 'top' | 'bottom';
}

export default createStyles(
	(theme, { height, borderPosition, fixed, position, zIndex }: VerticalSectionStyles) => {
		return {
			root: {
				[`${theme.dark} &`]: {
					backgroundColor: theme.fn.themeColor('dark', 7),
					borderBottom:
						borderPosition === 'bottom' ? `1px solid ${theme.fn.themeColor('dark', 5)}` : undefined,
					borderTop:
						borderPosition === 'top' ? `1px solid ${theme.fn.themeColor('dark', 5)}` : undefined
				},
				...position,
				zIndex,
				height,
				fontFamily: theme.fonts.standard.value ?? 'sans-serif',
				maxHeight: height,
				position: fixed ? 'fixed' : 'static',
				boxSizing: 'border-box',
				backgroundColor: 'white',
				borderBottom:
					borderPosition === 'bottom' ? `1px solid ${theme.fn.themeColor('gray', 2)}` : undefined,
				borderTop:
					borderPosition === 'top' ? `1px solid ${theme.fn.themeColor('gray', 2)}` : undefined
			}
		};
	}
);
