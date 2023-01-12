import { SvelteComponentTyped } from 'svelte';
import { SvelteUINumberSize } from '$lib/styles';
import type { PaperProps } from '../Paper/Paper';

export interface CardProps extends PaperProps {}

export interface CardEvents {
	click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface CardSlots {
	default: Record<string, never>;
}

export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {}
