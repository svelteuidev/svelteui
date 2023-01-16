import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Component } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type TimelineItemVariant = 'dashed' | 'dotted' | 'solid';

export interface TimelineItemProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: boolean;
	align?: 'left' | 'right';
	bullet?: Component | HTMLOrSVGElement;
	bulletSize?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineActive?: boolean;
	lineVariant?: TimelineItemVariant;
	lineWidth?: number;
	title?: string;
}

export interface TimelineItemSlots {
	default: Record<string, never>;
}

export default class TimelineItem extends SvelteComponentTyped<
	TimelineItemProps,
	Record<string, never>,
	TimelineItemSlots
> {}
