import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { LiteralUnion, Transition, TransitionOptions } from '$lib/internal';
import type { DefaultProps, SvelteUINumberSize, SvelteUIShadow, SvelteUISize } from '$lib/styles';

export interface ModalProps extends DefaultProps, Omit<HTMLAttributes<HTMLElement>, 'title'> {
	opened: boolean;
	titleText?: any;
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
	onclose?: () => void;
	title?: Snippet;
	children?: Snippet;
	[key: string]: any;
}
