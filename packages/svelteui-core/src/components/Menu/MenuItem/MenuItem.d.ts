import { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import { Component, LiteralUnion } from '$lib/internal';
import { DefaultProps, SvelteUIColor } from '$lib/styles';

export interface SharedMenuItemProps extends DefaultProps, HTMLAttributes<HTMLButtonElement> {
	color?: SvelteUIColor;
	disabled?: boolean;
	icon?: Component | HTMLOrSVGElement;
	iconProps?: Record<string, any>;
}

export interface MenuItemPropsInternal extends SharedMenuItemProps {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
}

export type MenuItemProps = MenuItemPropsInternal & HTMLButtonAttributes & HTMLAnchorAttributes;
