import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	w?: SvelteUINumberSize;
	h?: SvelteUINumberSize;
}
