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
