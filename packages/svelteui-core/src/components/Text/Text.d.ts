import { SvelteComponentTyped } from 'svelte';
import { HTMLAnchorAttributes } from 'svelte/elements';
import { Component, LiteralUnion } from '$lib/internal';
import {
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

export interface TextProps<T extends EventTarget = HTMLElement | HTMLAnchorElement>
	extends DefaultProps<T>,
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
}

export interface TextEvents {}

export interface TextSlots {
	default: { slotValue: string };
}

export default class Text extends SvelteComponentTyped<TextProps, TextEvents, TextSlots> {}
