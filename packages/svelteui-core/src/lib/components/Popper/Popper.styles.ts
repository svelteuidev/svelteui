import { fade } from 'svelte/transition';
import type { TransitionConfig } from 'svelte/transition';
import type { CSS, DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

export interface PopperProps extends DefaultProps {
	position?: 'top' | 'left' | 'bottom' | 'right';
	placement?: 'start' | 'center' | 'end';
	gutter?: number;
	arrowSize?: number;
	arrowDistance?: number;
	withArrow?: boolean;
	arrowOverride?: Override['props'];
	arrowClassName?: string;
	zIndex?: number;
	transition?: Transition;
	transitionDuration?: number;
	exitTransition?: Transition;
	exitTransitionDuration?: number;
	mounted?: boolean;
	dir?: 'ltr' | 'rtl';
	reference?: Element;
}

export type Transition = (node: Element, params: Record<string, any>) => TransitionConfig;
