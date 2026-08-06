import { SvelteComponent, type Snippet } from 'svelte';
import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';
import type { CSS, DefaultProps, SvelteUITheme } from '$lib/styles';
import type { Component, LiteralUnion } from '$lib/internal';

interface BoxPropsInternal<T extends EventTarget = HTMLElement>
	extends DefaultProps<HTMLElement | SvelteComponent>,
		HTMLAttributes<T> {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	css?: CSS | ((theme: SvelteUITheme) => CSS);
	children?: Snippet;
	[key: string]: any;
}

type ValueOf<T> = T[keyof T];

export type BoxProps<T extends EventTarget = HTMLElement> = BoxPropsInternal<T> &
	ValueOf<SvelteHTMLElements>;
