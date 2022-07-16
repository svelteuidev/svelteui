import { createStyles } from '$lib/styles';
import type { TransitionConfig, EasingFunction } from 'svelte/transition';
import type { DefaultProps } from '$lib/styles';
import type { TransitionName, TransitionOptions } from '$lib/internal';

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
	transitionOptions?: TransitionOptions;
	exitTransition?: Transition;
	exitTransitionOptions?: TransitionOptions;
	mounted?: boolean;
	reference?: HTMLElement;
	withinPortal?: boolean;
}
export interface PopperStyleParams {
	arrowSize: number;
	zIndex: number;
}
export type Transition =
	| TransitionName
	| ((node: Element, params: TransitionParams) => TransitionConfig);

interface TransitionParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export function calculateArrowPlacement(arrowSize, arrowDistance, position, placement) {
	switch (position) {
		case 'top':
			return {
				top: 'unset',
				bottom: `${-1 * arrowSize}px`,
				left: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				right: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'bottom':
			return {
				top: `${-1 * arrowSize}px`,
				bottom: 'unset',
				left: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				right: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'left':
			return {
				right: `${-1 * arrowSize}px`,
				left: 'unset',
				top: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				bottom: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
		case 'right':
			return {
				right: 'unset',
				left: `${-1 * arrowSize}px`,
				top: placement === 'start' ? `${arrowSize * arrowDistance}px` : 'unset',
				bottom: placement === 'start' ? 'unset' : `${arrowSize * arrowDistance}px`
			};
	}
}

export default createStyles((_, { arrowSize, zIndex }: PopperStyleParams) => {
	return {
		root: {
			position: 'absolute',
			pointerEvents: 'none',
			zIndex: zIndex
		},
		arrowStyles: {
			width: arrowSize * 2,
			height: arrowSize * 2,
			position: 'absolute',
			transform: 'rotate(45deg)',
			border: '1px solid transparent',
			zIndex: zIndex
		}
	};
});
