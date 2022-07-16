import type { DefaultProps, CSS, SvelteUITheme } from '$lib/styles';
import type { Component, LiteralUnion } from '$lib/internal';

export interface BoxProps extends DefaultProps<HTMLElement> {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	css?: CSS | ((theme: SvelteUITheme) => CSS);
}
