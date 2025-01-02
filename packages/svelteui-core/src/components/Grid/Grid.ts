import type { Snippet } from 'svelte';
import type { Writable } from 'svelte/store';
import type { HTMLAttributes } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type GridContext = Writable<{ cols: number; grow: boolean; spacing: SvelteUINumberSize }>;

export interface GridProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	align?: CSS['alignItems'];
	cols?: number;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	justify?: CSS['justifyContent'];
	children?: Snippet;
	[key: string]: any;
}
