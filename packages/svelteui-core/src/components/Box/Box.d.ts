import { SvelteComponent } from 'svelte';
import {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLBaseAttributes,
	HTMLButtonAttributes,
	HTMLFormAttributes,
	HTMLLabelAttributes
} from 'svelte/elements';
import { CSS, DefaultProps, SvelteUITheme } from '$lib/styles-old';
import { Component, LiteralUnion } from '$lib/internal';

interface BoxPropsInternal<T extends EventTarget = HTMLElement>
	extends DefaultProps<HTMLElement | SvelteComponent>,
		HTMLAttributes<T> {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	css?: CSS | ((theme: SvelteUITheme) => CSS);

	// @TODO: follow this issue - https://github.com/sveltejs/language-tools/issues/1825
	// since it will possibly add this feature in the future, which will remove all
	// current errors we have with `data-*` props being passed to Box
	[key: `data-${string}`]: any;
}

export type BoxProps<T extends EventTarget = HTMLElement> = BoxPropsInternal<T> &
	HTMLBaseAttributes &
	HTMLAnchorAttributes &
	HTMLButtonAttributes &
	HTMLFormAttributes &
	HTMLLabelAttributes;
