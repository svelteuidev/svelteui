import { HTMLAttributes } from 'svelte/elements';
import { Component, LiteralUnion } from '$lib/internal';
import { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface SharedMenuItemProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	color?: SvelteUIColor;
	disabled?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, any>;
}

export interface MenuItemProps extends SharedMenuItemProps {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
}
