import type { EasingFunction } from 'svelte/types/runtime/transition';

export interface GradientParams {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
}
