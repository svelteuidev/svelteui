import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	w?: SvelteUINumberSize;
	h?: SvelteUINumberSize;
}

export interface SpaceSlots {
	default: Record<string, never>;
}

export default class Space extends SvelteComponentTyped<
	SpaceProps,
	Record<string, never>,
	SpaceSlots
> {}
