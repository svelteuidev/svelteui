import type { TransitionConfig, EasingFunction } from 'svelte/transition';
import type { DefaultProps, Override } from '$lib/styles';

export interface PopperProps extends DefaultProps {
	position?: 'top' | 'left' | 'bottom' | 'right';
	placement?: 'start' | 'center' | 'end';
	gutter?: number;
	arrowSize?: number;
	arrowDistance?: number;
	arrowOverride?: Override['props'];
	arrowClassName?: string;
	withArrow?: boolean;
	zIndex?: number;
	transition?: Transition;
	transitionDuration?: number;
	exitTransition?: Transition;
	exitTransitionDuration?: number;
	mounted?: boolean;
	reference?: Element;
}

export type Transition = (node: Element, params: TransitionParams) => TransitionConfig;

interface TransitionParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}
