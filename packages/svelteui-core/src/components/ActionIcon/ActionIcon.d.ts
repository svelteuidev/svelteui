import { SvelteComponentTyped } from 'svelte';
import { HTMLButtonAttributes } from 'svelte/elements';
import type { Component, LiteralUnion } from '$lib/internal/types';
import type { SvelteUIColor, SvelteUINumberSize, DefaultProps } from '$lib/styles';
import type { LoaderProps } from '../Loader/Loader';

export type ActionIconVariant =
	| 'hover'
	| 'filled'
	| 'outline'
	| 'light'
	| 'default'
	| 'transparent';

export interface ActionIconProps extends DefaultProps, HTMLButtonAttributes {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
	color?: SvelteUIColor;
	variant?: ActionIconVariant;
	size?: SvelteUINumberSize;
	radius?: SvelteUINumberSize | number;
	loaderProps?: LoaderProps;
	loading?: boolean;
	disabled?: boolean;
	href?: string;
	external?: boolean;
}

export interface ActionIconEvents {
	click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface ActionIconSlots {
	default: Record<string, never>;
}

export default class ActionIcon extends SvelteComponentTyped<
	ActionIconProps,
	ActionIconEvents,
	ActionIconSlots
> {}
