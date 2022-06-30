import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize, SvelteUIColor } from '$lib/styles';

export interface TimelineProps extends DefaultProps {
	active?: number;
	align?: 'left' | 'right';
	bulletSize?: number;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineWidth?: number;
	reverseActive?: boolean;
}

interface ThemeIconStyleParams {
	align?: 'left' | 'right';
	bulletSize?: number;
	lineWidth?: number;
}

export default createStyles((_, { align, bulletSize, lineWidth }: ThemeIconStyleParams) => {
	return {
		root: {
			paddingLeft: align === 'left' ? bulletSize / 2 + lineWidth / 2 : 0,
			paddingRight: align === 'left' ? 0 : bulletSize / 2 + lineWidth / 2
		}
	};
});
