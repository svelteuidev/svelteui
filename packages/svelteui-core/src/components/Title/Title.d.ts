import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Writable } from 'svelte/store';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { TextProps } from '../Text/Text';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export type HTMLHeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TitleProps extends TextProps<HTMLHeadingElement> {
	order?: TitleOrder;
}

export interface TitleSlots {
	default: Record<string, never>;
}

export default class Title extends SvelteComponentTyped<
	TitleProps,
	Record<string, never>,
	TitleSlots
> {}
