import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface MediaQueryProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	smallerThan?: SvelteUINumberSize;
	largerThan?: SvelteUINumberSize;
	styles?: CSS;
	query?: string;
}

export interface MediaQueryEvents {}

export interface MediaQuerySlots {
  label: { slotValue: string };
}

export default class MediaQuery extends SvelteComponentTyped<MediaQueryProps, MediaQueryEvents, MediaQuerySlots> {}
