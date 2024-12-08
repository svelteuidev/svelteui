import type { Component, Snippet } from 'svelte';
import type { HTMLBlockquoteAttributes } from 'svelte/elements';

import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { TextProps } from '../Text/Text';

type BaseProps = TextProps<HTMLElement> & HTMLBlockquoteAttributes;

export interface BlockquoteProps extends BaseProps {
	iconComponent?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	color?: SvelteUIColor;
	icon?: Snippet;
	citeContent?: Snippet;
	children?: Snippet;
	[key: string]: any
}
