export type Animations = 'spin' | 'bounce' | 'ping' | 'pulse' | 'float' | 'pulsate';

export type TextAnimations = 'hue' | 'flow';

export type EasingOptions =
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'step-end'
	| 'step-start'
	| 'linear';

export type Iterations =
	| 'alternate'
	| 'alternate-reverse'
	| 'backwards'
	| 'both'
	| 'forwards'
	| 'infinite'
	| 'none'
	| 'normal';

export interface Gradient {
	from?: string;
	to?: string;
	deg?: number;
}
