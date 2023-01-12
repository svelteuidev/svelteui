import { SvelteComponentTyped } from 'svelte';
import { HTMLButtonAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface BurgerProps extends DefaultProps<HTMLButtonElement>, HTMLButtonAttributes {
	opened?: boolean;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
}

export interface BurgerEvents {
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface BurgerSlots {}

export default class Burger extends SvelteComponentTyped<BurgerProps, BurgerEvents, BurgerSlots> {}
