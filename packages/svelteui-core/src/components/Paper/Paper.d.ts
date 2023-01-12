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
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface PaperSlots {
  default: { slotValue: string };
}

export default class Paper extends SvelteComponentTyped<PaperProps, PaperEvents, PaperSlots> {}
