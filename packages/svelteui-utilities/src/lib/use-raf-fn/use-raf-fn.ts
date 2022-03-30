import { defaultWindow } from '../utils/_configurable';
import type { ConfigurableWindow } from '../utils/_configurable';
import type { Pauseable } from '../types/Shared';

export interface RafFnOptions extends ConfigurableWindow {
	/**
	 * Start the requestAnimationFrame loop immediately on creation
	 *
	 * @default true
	 */
	immediate?: boolean;
}

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * @see https://svelteui-docs.vercel.app/docs/utilities/useraffn
 * @param fn callback function
 * @param options controls whether the callback is triggered immediately
 */
export function useRafFn(fn: () => void, options: RafFnOptions = {}): Pauseable {
	const { immediate = true, window = defaultWindow } = options;
	let isActive = false;

	function loop() {
		if (!isActive || !window) return;

		fn();

		window.requestAnimationFrame(loop);
	}

	function resume() {
		if (!isActive || !window) {
			isActive = true;
			loop();
		}
	}

	function pause() {
		isActive = false;
	}

	if (immediate) resume();

	return {
		isActive,
		pause,
		resume
	};
}
