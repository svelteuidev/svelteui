import { HTMLAttributes } from 'svelte/elements';
import { Component, TransitionName, TransitionOptions } from '$lib/internal';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles-old';
import { PopperProps } from '../Popper/Popper';

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
	[evt: string]: CustomEvent<any>;
}
