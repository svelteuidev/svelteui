import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface CenterProps extends DefaultProps<HTMLButtonElement>, HTMLAttributes<HTMLElement> {
	inline?: boolean;
}

export interface CenterEvents {}

export interface CenterSlots {
  default: { slotValue: string };
}

export default class Center extends SvelteComponentTyped<CenterProps, CenterEvents, CenterSlots> {}
