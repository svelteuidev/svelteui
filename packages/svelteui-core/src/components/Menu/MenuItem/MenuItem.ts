import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';

import type { Component, LiteralUnion } from '$lib/internal';
import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface SharedMenuItemProps extends DefaultProps, HTMLAttributes<HTMLButtonElement> {
	color?: SvelteUIColor;
	disabled?: boolean;
	icon?: Snippet;
	iconComponent?: Component | HTMLOrSVGElement;
	iconSize?: SvelteUINumberSize;
	iconProps?: Record<string, unknown>;
	children: Snippet;
	rightSection?: Snippet;
	[key: string]: any;
}

export interface MenuItemPropsInternal extends SharedMenuItemProps {
	root?: LiteralUnion<keyof HTMLElementTagNameMap | Component, string>;
}

export type MenuItemProps = MenuItemPropsInternal & HTMLButtonAttributes & HTMLAnchorAttributes;
