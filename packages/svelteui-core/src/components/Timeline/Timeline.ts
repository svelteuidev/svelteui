import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type TimelineContext = {
	active: number;
	reverseActive: boolean;
	align: 'left' | 'right';
	bulletSize: number;
	radius: SvelteUINumberSize;
	color: SvelteUIColor;
	lineWidth: number;
};

export interface TimelineProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: number;
	align?: 'left' | 'right';
	bulletSize?: number;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineWidth?: number;
	reverseActive?: boolean;
	children?: Snippet;
	[key: string]: any;
}
