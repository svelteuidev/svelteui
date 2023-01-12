import { SvelteComponentTyped } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface OverlayProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	blur?: number;
	gradient?: string;
	center?: boolean;
	opacity?: CSS['opacity'];
	color?: CSS['backgroundColor'];
	zIndex?: CSS['zIndex'];
	radius?: SvelteUINumberSize;
}

export interface OverlaySlots {
	default: Record<string, never>;
}

export default class Overlay extends SvelteComponentTyped<
	OverlayProps,
	Record<string, never>,
	OverlaySlots
> {}
