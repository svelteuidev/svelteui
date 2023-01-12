import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface ChipProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	id?: string;
	checked?: boolean;
	disabled?: boolean;
	value?: string;
	label?: Component | string;
	radius?: SvelteUINumberSize | number;
	size?: SvelteUISize;
	type?: 'checkbox' | 'radio';
	variant?: 'outline' | 'filled';
	transitionDuration?: number;
}

export interface ChipEvents {
	click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface ChipSlots {
	default: Record<string, never>;
}

export default class Chip extends SvelteComponentTyped<ChipProps, ChipEvents, ChipSlots> {}
