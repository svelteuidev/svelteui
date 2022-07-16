import { createStyles } from '$lib/styles';
import type { Writable } from 'svelte/store';
import type { DefaultProps, SvelteUINumberSize, SvelteUIColor } from '$lib/styles';

export type TimelineContext = Writable<{
	active: number;
	lineActive: boolean;
	reverseActive: boolean;
	align: 'left' | 'right';
	bulletSize: number;
	radius: SvelteUINumberSize;
	color: SvelteUIColor;
	lineWidth: number;
}>;

export interface TimelineProps extends DefaultProps {
	active?: number;
	align?: 'left' | 'right';
	bulletSize?: number;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineWidth?: number;
	reverseActive?: boolean;
}

export interface TimelineStyleParams {
	align?: 'left' | 'right';
	bulletSize?: number;
	lineWidth?: number;
}

export default createStyles((_, { align, bulletSize, lineWidth }: TimelineStyleParams) => {
	return {
		root: {
			paddingLeft: align === 'left' ? bulletSize / 2 + lineWidth / 2 : 0,
			paddingRight: align === 'left' ? 0 : bulletSize / 2 + lineWidth / 2
		}
	};
});
