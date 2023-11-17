import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export type HorizontalSectionWidth = Partial<Record<string, string | number>>;

export interface HorizontalSectionPosition {
	top?: number;
	left?: number;
	bottom?: number;
	right?: number;
}

export interface HorizontalSectionSharedProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	width?: HorizontalSectionWidth;
	height?: string | number;
	fixed?: boolean;
	position?: HorizontalSectionPosition;
	hiddenBreakpoint?: SvelteUINumberSize;
	hidden?: boolean;
	zIndex?: number;
}

export interface HorizontalSectionProps extends HorizontalSectionSharedProps {
	section: 'navbar' | 'aside';
}
