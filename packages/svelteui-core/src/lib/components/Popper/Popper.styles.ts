import type { CSS, DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface PopperProps extends DefaultProps {
	position?: 'top' | 'left' | 'bottom' | 'right';
	placement?: 'start' | 'center' | 'end';
	gutter?: number;
	arrowSize?: number;
	arrowDistance?: number;
	withArrow?: boolean;
	zIndex?: number;
	transition?: Transition;
	transitionDuration?: number;
	exitTransitionDuration?: number;
	transitionTimingFunction?: string;
	mounted?: boolean;
	dir?: 'ltr' | 'rtl';
	reference?: any; // @TODO: not any
}

export interface TransitionStyles {
	common?: CSS;
	in: CSS;
	out: CSS;
	transitionProperty: CSS['transitionProperty'];
}

export type TransitionName =
	| 'fade'
	| 'skew-up'
	| 'skew-down'
	| 'rotate-right'
	| 'rotate-left'
	| 'slide-down'
	| 'slide-up'
	| 'slide-right'
	| 'slide-left'
	| 'scale-y'
	| 'scale-x'
	| 'scale'
	| 'pop'
	| 'pop-top-left'
	| 'pop-top-right'
	| 'pop-bottom-left'
	| 'pop-bottom-right';

export type Transition = TransitionName | TransitionStyles;
