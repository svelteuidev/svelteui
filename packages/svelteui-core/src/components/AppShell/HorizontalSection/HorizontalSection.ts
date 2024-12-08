import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

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
	children?: Snippet
	[key: string]: any
}

export interface HorizontalSectionProps extends HorizontalSectionSharedProps {
	section: 'navbar' | 'aside';
}
