import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export type KbdPosition = 'right' | 'center' | 'left' | 'apart';

export interface KbdProps extends DefaultProps, HTMLAttributes<HTMLElement> {}

export interface KbdSlots {
	default: Record<string, never>;
}

export default class Kbd extends SvelteComponentTyped<KbdProps, Record<string, never>, KbdSlots> {}
