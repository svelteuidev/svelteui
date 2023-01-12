import { SvelteComponentTyped } from 'svelte';
import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import { PopperProps } from '../Popper/Popper';

export interface TooltipProps extends PopperProps {
	label: any;
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
}

export interface TooltipEvents {
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface TooltipSlots {
	default: Record<string, never>;
	label: Record<string, never>;
}

export default class Tooltip extends SvelteComponentTyped<
	TooltipProps,
	TooltipEvents,
	TooltipSlots
> {}
