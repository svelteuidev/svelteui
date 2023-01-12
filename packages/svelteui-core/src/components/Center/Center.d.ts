import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface CenterProps extends DefaultProps<HTMLButtonElement>, HTMLAttributes<HTMLElement> {
	inline?: boolean;
}

export interface CenterSlots {
	default: Record<string, never>;
}

export default class Center extends SvelteComponentTyped<
	CenterProps,
	Record<string, never>,
	CenterSlots
> {}
