import type { HTMLAttributes } from 'svelte/elements';
import type { Component, TransitionName, TransitionOptions } from '$lib/internal';
import type { DefaultProps, SvelteUINumberSize, SvelteUIShadow } from '$lib/styles';
import type { PopperProps } from '../Popper/Popper';
import type { Snippet } from 'svelte';

export interface MenuProps
	extends DefaultProps,
		HTMLAttributes<HTMLElement>,
		Pick<PopperProps, 'withArrow' | 'gutter' | 'placement' | 'position'> {
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
	onopen?: () => void
	onclose?: () => void
	control?: Snippet;
	children?: Snippet;
	[key: string]: any;
}
