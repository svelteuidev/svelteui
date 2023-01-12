import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Component, LiteralUnion } from '$lib/internal';
import { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface SharedMenuItemProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	disabled?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, any>;
}

export interface MenuItemProps extends SharedMenuItemProps {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
}

export interface MenuItemEvents {
  click: MouseEvent;
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface MenuItemSlots {
  label: { slotValue: string };
  control: { slotValue: string };
}

export default class MenuItem extends SvelteComponentTyped<MenuItemProps, MenuItemEvents, MenuItemSlots> {}
