import type { SvelteUIColor, SvelteUINumberSize } from '$lib/styles';
import type { PopperProps } from '../Popper/Popper.styles';

export interface TooltipProps extends PopperProps {
	label: any;
	children: any;
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
