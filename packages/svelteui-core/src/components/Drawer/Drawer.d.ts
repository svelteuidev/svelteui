import { HTMLAttributes } from 'svelte/elements';
import { LiteralUnion, Transition } from '$lib/internal';
import { DefaultProps, SvelteUINumberSize, SvelteUIShadow, SvelteUISize } from '$lib/styles';

export interface DrawerProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	opened: boolean;
	title?: any;
	zIndex?: number;
	overflow?: 'outside' | 'inside';
	withCloseButton?: boolean;
	overlay?: boolean;
	overlayOpacity?: number;
	overlayColor?: string;
	overlayBlur?: number;
	position?: DrawerPosition;
	size?: LiteralUnion<SvelteUISize, number | string>;
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
	speed?: number;
}

export interface DrawerEvents {
	close: CustomEvent;
	[evt: string]: CustomEvent<any>;
}


export type DrawerPosition = 'right' | 'left' | 'top' | 'bottom';