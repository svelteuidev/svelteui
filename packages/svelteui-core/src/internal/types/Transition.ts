import {
	TransitionConfig,
	EasingFunction,
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

export interface TransitionParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}
