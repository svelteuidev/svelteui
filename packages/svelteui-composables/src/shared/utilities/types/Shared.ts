import type { Writable } from 'svelte/store';

/** Function type */
export type Fn = () => void;

export interface Pauseable {
	/**
	 * A state value that indicates whether a pauseable instance is active
	 */
	isActive: boolean;

	/**
	 * Temporary pause the effect from executing
	 */
	pause: Fn;

	/**
	 * Resume the effects
	 */
	resume: Fn;
}

// prettier-ignore
export type Action<T = any> = (node: HTMLElement, parameters?: T) => {
	update?: (parameters: T) => any | void;
	destroy?: () => void;
};

export { Writable };
