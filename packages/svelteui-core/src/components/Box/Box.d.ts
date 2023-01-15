import { SvelteComponent, SvelteComponentTyped } from 'svelte';
import {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLBaseAttributes,
	HTMLButtonAttributes,
	HTMLFormAttributes,
	HTMLLabelAttributes
} from 'svelte/elements';
import { CSS, DefaultProps, SvelteUITheme } from '$lib/styles';
import { Component, LiteralUnion } from '$lib/internal';

export interface BoxProps<T extends EventTarget = HTMLElement>
	extends DefaultProps<HTMLElement | SvelteComponent>,
		HTMLAttributes<T>,
		HTMLAnchorAttributes,
		HTMLBaseAttributes,
		HTMLButtonAttributes,
		HTMLLabelAttributes,
		HTMLFormAttributes,
		Record<string, unknown> {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	css?: CSS | ((theme: SvelteUITheme) => CSS);

	// @TODO: follow this issue - https://github.com/sveltejs/language-tools/issues/1825
	// since it will possibly add this feature in the future, which will remove all
	// current errors we have with `data-*` props being passed to Box
	[key: `data-${string}`]: any;
}

export interface BoxEvents {
	click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface BoxSlots {
	default: Record<string, never>;
}

export default class Box extends SvelteComponentTyped<BoxProps, BoxEvents, BoxSlots> {}
