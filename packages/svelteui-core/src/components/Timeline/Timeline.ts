import { HTMLAttributes } from 'svelte/elements';
import type { Writable } from 'svelte/store';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type TimelineContext = Writable<{
	active: number;
	reverseActive: boolean;
	align: 'left' | 'right';
	bulletSize: number;
	radius: SvelteUINumberSize;
	color: SvelteUIColor;
	lineWidth: number;
}>;

export interface TimelineProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: number;
	align?: 'left' | 'right';
	bulletSize?: number;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineWidth?: number;
	reverseActive?: boolean;
}
