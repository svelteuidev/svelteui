import { SvelteComponent, SvelteComponentTyped } from 'svelte';
import { HTMLAttributes, type HTMLButtonAttributes } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUITheme } from '$lib/styles';
import type { Component, LiteralUnion } from '$lib/internal';

export interface BoxProps<T extends EventTarget = HTMLElement>
	extends DefaultProps<HTMLElement | SvelteComponent>,
		HTMLAttributes<T> {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	css?: CSS | ((theme: SvelteUITheme) => CSS);
}

export interface BoxEvents {
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface BoxSlots {
	default: { slotValue: string };
}

export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {}
