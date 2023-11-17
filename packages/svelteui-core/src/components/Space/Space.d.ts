import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles-old';

export interface SpaceProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	w?: SvelteUINumberSize;
	h?: SvelteUINumberSize;
}
