import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface StackProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	spacing?: SvelteUINumberSize;
	align?: CSS['alignItems'];
	justify?: CSS['justifyContent'];
}

export interface StackSlots {
	default: Record<string, never>;
}

export default class Stack extends SvelteComponentTyped<
	StackProps,
	Record<string, never>,
	StackSlots
> {}
