import type { DefaultProps, SvelteUINumberSize, SvelteUIShadow, Transition } from '$lib/styles';

export interface ModalProps extends DefaultProps {
	opened: boolean;
	title?: any;
	zIndex?: number;
	overflow?: 'outside' | 'inside';
	withCloseButton?: boolean;
	overlayOpacity?: number;
	overlayColor?: string;
	overlayBlur?: number;
	radius?: SvelteUINumberSize;
	size?: string | number;
	transition?: Transition;
	transitionDuration?: number;
	transitionTimingFunction?: string;
	closeButtonLabel?: string;
	id?: string;
	shadow?: SvelteUIShadow;
	padding?: SvelteUINumberSize;
	closeOnClickOutside?: boolean;
	closeOnEscape?: boolean;
	trapFocus?: boolean;
	centered?: boolean;
	target?: HTMLElement | string;
	withinPortal?: boolean;
	onClose(args?: any): any;
}
