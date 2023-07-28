import { HTMLAttributes } from 'svelte/elements';
import { LiteralUnion, Transition, TransitionOptions } from '$lib/internal';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow, SvelteUISize } from '$lib/styles';

export interface ModalProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	opened: boolean;
	title?: any;
	zIndex?: number;
	overflow?: 'outside' | 'inside';
	withCloseButton?: boolean;
	overlayOpacity?: number;
	overlayColor?: string;
	overlayBlur?: number;
	radius?: SvelteUINumberSize;
	size?: LiteralUnion<SvelteUISize, number | string>;
	transition?: Transition;
	transitionOptions?: TransitionOptions;
	overlayTransition?: Transition;
	overlayTransitionOptions?: TransitionOptions;
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
}

export interface ModalEvents {
	close: CustomEvent;
	[evt: string]: CustomEvent<any>;
}
