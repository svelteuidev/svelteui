import type { EasingFunction } from 'svelte/transition';

export interface FlipboardParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}
