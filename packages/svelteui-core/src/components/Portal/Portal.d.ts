import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface PortalProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	position?: string;
	zIndex?: number;
}

export interface PortalSlots {
	default: Record<string, never>;
}

export default class Portal extends SvelteComponentTyped<
	PortalProps,
	Record<string, never>,
	PortalSlots
> {}
