import { SvelteComponentTyped } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';
import { TransitionConfig, EasingFunction } from 'svelte/transition';
import { DefaultProps } from '$lib/styles';
import { TransitionName, TransitionOptions } from '$lib/internal';

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

export interface PopperEvents {
	mouseover: MouseEvent;
	mouseenter: MouseEvent;
	mouseleave: MouseEvent;
}

export interface PopperSlots {
	default: Record<string, never>;
}

export default class Popper extends SvelteComponentTyped<PopperProps, PopperEvents, PopperSlots> {}
