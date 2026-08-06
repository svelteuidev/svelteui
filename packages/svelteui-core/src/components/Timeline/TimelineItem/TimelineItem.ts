import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { Component } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export type TimelineItemVariant = 'dashed' | 'dotted' | 'solid';

export interface TimelineItemProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	active?: boolean;
	align?: 'left' | 'right';
	bulletComponent?: Component | HTMLOrSVGElement;
	bulletSize?: SvelteUINumberSize;
	radius?: SvelteUINumberSize;
	color?: SvelteUIColor;
	lineActive?: boolean;
	lineVariant?: TimelineItemVariant;
	lineWidth?: number;
	title?: string;
	bullet?: Snippet;
	children?: Snippet;
	[key: string]: any;
}
