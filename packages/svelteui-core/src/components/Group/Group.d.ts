import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export type GroupPosition = 'right' | 'center' | 'left' | 'apart';

export interface GroupProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	position?: GroupPosition;
	noWrap?: boolean;
	grow?: boolean;
	spacing?: SvelteUINumberSize;
	direction?: 'row' | 'column';
	align?: CSS['alignItems'];
	children?: number;
}

export interface GroupEvents {}

export interface GroupSlots {
  label: { slotValue: string };
}

export default class Group extends SvelteComponentTyped<GroupProps, GroupEvents, GroupSlots> {}
