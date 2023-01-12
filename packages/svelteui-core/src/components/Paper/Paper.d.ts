import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles';

export interface PaperProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	shadow?: SvelteUIShadow;
	radius?: SvelteUINumberSize;
	withBorder?: boolean;
	padding?: SvelteUINumberSize;
}

export interface PaperEvents {
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface PaperSlots {
	default: Record<string, never>;
}

export default class Paper extends SvelteComponentTyped<PaperProps, PaperEvents, PaperSlots> {}
