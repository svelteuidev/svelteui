import type { Component, Snippet } from 'svelte';
import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { PopperProps } from '../Popper/Popper';

export interface TooltipProps extends PopperProps {
	labelComponent: Component | string | number;
	opened?: boolean;
	openDelay?: number;
	closeDelay?: number;
	color?: SvelteUIColor;
	radius?: SvelteUINumberSize;
	disabled?: boolean;
	arrowSize?: number;
	width?: number | 'auto';
	wrapLines?: boolean;
	allowPointerEvents?: boolean;
	tooltipRef?: HTMLElement | any;
	tooltipId?: string;
	label?: Snippet;
}
