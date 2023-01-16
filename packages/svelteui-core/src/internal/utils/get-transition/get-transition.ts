import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';
import type { TransitionConfig } from 'svelte/transition';
import type { Transition, TransitionName, TransitionParams } from '../../types';

export function getTransition(
	name: TransitionName | ((node: Element, params: TransitionParams) => TransitionConfig)
): Transition {
	let transition: Transition;

	if (typeof name === 'function') return name;

	switch (name) {
		case 'fade':
			transition = fade;
			break;
		case 'blur':
			transition = blur;
			break;
		case 'fly':
			transition = fly;
			break;
		case 'slide':
			transition = slide;
			break;
		case 'scale':
			transition = scale;
			break;
		case 'draw':
			transition = draw;
			break;
		default:
			throw new Error('You must enter a valid transition name');
	}
	return transition;
}
