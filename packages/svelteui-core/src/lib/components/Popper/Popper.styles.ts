import { createStyles } from '$lib/styles';
import type { TransitionConfig, EasingFunction } from 'svelte/transition';
import type { DefaultProps } from '$lib/styles';

export interface PopperProps extends DefaultProps<HTMLElement> {
	position?: 'top' | 'left' | 'bottom' | 'right';
	placement?: 'start' | 'center' | 'end';
	gutter?: number;
	arrowSize?: number;
	arrowDistance?: number;
	arrowClassName?: string;
	withArrow?: boolean;
	zIndex?: number;
	transition?: Transition;
	transitionDuration?: number;
	exitTransition?: Transition;
	exitTransitionDuration?: number;
	mounted?: boolean;
	reference?: HTMLElement;
	withinPortal?: boolean;
}
interface PopperStyleParams {
	popperPosition: Record<string, number>;
	arrowSize: number;
	zIndex: number;
}
export type Transition = (node: Element, params: TransitionParams) => TransitionConfig;

interface TransitionParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export default createStyles((_, { popperPosition, arrowSize, zIndex }: PopperStyleParams) => {
	return {
		root: {
			position: 'absolute',
			top: popperPosition?.top,
			left: popperPosition?.left,
			pointerEvents: 'none',
			zIndex: zIndex
		},
		arrowStyles: {
			width: arrowSize * 2,
			height: arrowSize * 2,
			position: 'absolute',
			transform: 'rotate(45deg)',
			border: '1px solid transparent',
			zIndex: zIndex,
			top: popperPosition?.arrowTop,
			left: popperPosition?.arrowLeft
		}
	};
});
