import type { EasingFunction } from 'svelte/types/runtime/transition';

export interface TypewriterParams {
	speed?: number;
	easing?: EasingFunction;
}

export interface FlipboardParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}
