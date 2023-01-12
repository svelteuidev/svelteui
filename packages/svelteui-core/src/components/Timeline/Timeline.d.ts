import { SvelteComponentTyped } from 'svelte';
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

export interface TimelineSlots {
	default: Record<string, never>;
	bullet: Record<string, never>;
}

export default class Timeline extends SvelteComponentTyped<
	TimelineProps,
	Record<string, never>,
	TimelineSlots
> {}
