import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { Component, TransitionName, TransitionOptions } from '$lib/internal';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles';
import { PopperProps } from '../Popper';

export interface MenuProps
	extends DefaultProps,
		HTMLAttributes<HTMLElement>,
		Pick<PopperProps, 'withArrow' | 'gutter' | 'placement' | 'position'> {
	control?: Component | HTMLOrSVGElement;
	closeOnItemClick?: boolean;
	controlRefProp?: string;
	clickOutsideEvents?: string[];
	closeOnScroll?: boolean;
	delay?: number;
	menuButtonLabel?: string;
	menuId?: string;
	radius?: SvelteUINumberSize;
	opened?: boolean;
	shadow?: SvelteUIShadow;
	size?: SvelteUINumberSize | 'auto';
	trigger?: 'click' | 'hover';
	trapFocus?: boolean;
	withinPortal?: boolean;
	zIndex?: number;
	transition?: TransitionName;
	transitionOptions?: TransitionOptions;
}

export interface MenuEvents {
	open: CustomEvent;
	close: CustomEvent;
}

export interface MenuSlots {
	default: Record<string, never>;
	control: Record<string, never>;
}

export default class Menu extends SvelteComponentTyped<MenuProps, MenuEvents, MenuSlots> {}
