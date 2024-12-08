import type { Snippet } from 'svelte';
import type  { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface SpaceProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	w?: SvelteUINumberSize;
	h?: SvelteUINumberSize;
	children?: Snippet;
	[key: string]: any
}
