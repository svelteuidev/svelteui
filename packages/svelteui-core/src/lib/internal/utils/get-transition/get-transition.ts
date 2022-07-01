import { fade, blur, fly, slide, scale, draw } from 'svelte/transition';
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
	| typeof draw;
export type TransitionOptions =
	| FadeParams
	| BlurParams
	| FlyParams
	| SlideParams
	| ScaleParams
	| DrawParams;

export function getTransition(name: TransitionName): Transition {
	let transition: Transition;

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
			break;
	}
	return transition;
}
