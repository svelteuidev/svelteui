import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles-old';

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
}

export interface VerticalSectionProps extends VerticalSectionSharedProps {
	section: 'header' | 'footer';
}
