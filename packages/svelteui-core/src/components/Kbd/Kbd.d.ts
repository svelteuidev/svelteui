import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export type KbdPosition = 'right' | 'center' | 'left' | 'apart';

export interface KbdProps extends DefaultProps, HTMLAttributes<HTMLElement> {}

export interface KbdEvents {}

export interface KbdSlots {
  label: { slotValue: string };
}

export default class Kbd extends SvelteComponentTyped<KbdProps, KbdEvents, KbdSlots> {}
