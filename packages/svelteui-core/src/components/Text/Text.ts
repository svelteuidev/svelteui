import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { Component, LiteralUnion } from '$lib/internal';
import type {
	DefaultProps,
	SvelteUIGradient,
	SvelteUIColor,
	SvelteUITextAlignment,
	SvelteUITextTransform,
	SvelteUINumberSize,
	SvelteUINumberFontSize
} from '$lib/styles';

export type Tracking = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | number;

export type TextVariant = 'link' | 'text' | 'gradient';

export type TextColors = SvelteUIColor | 'dimmed';

export type HTMLTextElements = keyof HTMLElementTagNameMap;

export interface TextProps<
	T extends EventTarget = HTMLElement | HTMLHeadingElement | HTMLAnchorElement
> extends DefaultProps<T>,
		HTMLAnchorAttributes {
	align?: SvelteUITextAlignment;
	color?: TextColors;
	root?: LiteralUnion<HTMLTextElements | Component, string>;
	transform?: SvelteUITextTransform;
	variant?: TextVariant;
	size?: SvelteUINumberSize;
	weight?: SvelteUINumberFontSize;
	gradient?: SvelteUIGradient;
	inline?: boolean;
	lineClamp?: number;
	underline?: boolean;
	inherit?: boolean;
	tracking?: Tracking;
	children?: Snippet;
	[key: string]: any
}
