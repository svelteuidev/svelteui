import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DefaultProps } from '$lib/styles';
import type { Transition, TransitionOptions } from '$lib/internal';

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
	children?: Snippet;
	[key: string]: any
}
