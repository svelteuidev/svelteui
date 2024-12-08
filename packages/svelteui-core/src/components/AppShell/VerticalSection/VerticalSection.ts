import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';

export interface VerticalSectionPosition {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}

export interface VerticalSectionSharedProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	height: number | string;
	fixed?: boolean;
	position?: VerticalSectionPosition;
	zIndex?: number;
	children?: Snippet
	[key: string]: any
}

export interface VerticalSectionProps extends VerticalSectionSharedProps {
	section: 'header' | 'footer';
}
