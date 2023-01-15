import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';
import type { TransitionConfig, EasingFunction } from 'svelte/transition';
import type {
	FadeParams,
	BlurParams,
	FlyParams,
	SlideParams,
	ScaleParams,
	DrawParams
} from 'svelte/transition';

export type TransitionName = 'fade' | 'blur' | 'fly' | 'slide' | 'scale' | 'draw';
export type Transition =
	| typeof fade
	| typeof blur
	| typeof fly
	| typeof slide
	| typeof scale
	| typeof draw
	| ((node: Element, params: Record<string, unknown>) => TransitionConfig);
export type TransitionOptions =
	| FadeParams
	| BlurParams
	| FlyParams
	| SlideParams
	| ScaleParams
	| DrawParams
	| TransitionParams;

interface TransitionParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

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
