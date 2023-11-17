import { SvelteUIColor, SvelteUINumberSize } from '$lib/styles-old';
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
