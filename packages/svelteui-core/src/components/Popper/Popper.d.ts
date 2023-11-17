import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles-old';
import { Transition, TransitionOptions } from '$lib/internal';

export interface PopperProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	position?: 'top' | 'left' | 'bottom' | 'right';
	placement?: 'start' | 'center' | 'end';
	gutter?: number;
	arrowSize?: number;
	arrowDistance?: number;
	arrowClassName?: string;
	withArrow?: boolean;
	zIndex?: number;
	transition?: Transition;
	transitionOptions?: TransitionOptions;
	exitTransition?: Transition;
	exitTransitionOptions?: TransitionOptions;
	mounted?: boolean;
	reference?: HTMLElement;
	withinPortal?: boolean;
}
