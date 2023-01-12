import { SvelteComponentTyped } from 'svelte';
import { Writable } from 'svelte/store';
import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type GridContext = Writable<{ cols: number; grow: boolean; spacing: SvelteUINumberSize }>;

export interface GridProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	align?: CSS['alignItems'];
	cols?: number;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	justify?: CSS['justifyContent'];
}

export interface GridEvents {}

export interface GridSlots {
  label: { slotValue: string };
}

export default class Grid extends SvelteComponentTyped<GridProps, GridEvents, GridSlots> {}
