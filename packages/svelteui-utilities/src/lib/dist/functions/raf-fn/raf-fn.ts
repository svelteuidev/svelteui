import type { ConfigurableWindow } from '../../utils';
import type { Pauseable } from '../../types';

export interface RafFnOptions extends ConfigurableWindow {
	/**
	 * Start the requestAnimationFrame loop immediately on creation
	 *
	 * @default true
	 */
	immediate?: boolean;
}

// need a workaround to this, cannot import browser from $app/env as of now
const isBrowser = () => typeof window !== 'undefined';
const browser = isBrowser();

/**
 * Call function on every `requestAnimationFrame`. With controls of pausing and resuming.
 *
 * ```tsx
 * <script>
 * 	let count = 0;
 * 	const { pause, resume } = useRafFn(() => {
 * 		count++
 *     })
 * </script>
 *
 * Count: {count}
 * <button on:click={() => pause()}>Pause</button>
 * <button on:click={() => resume()}>Resume</button>
 * ```
 *
 * @param fn callback function
 * @param options controls whether the callback is triggered immediately
 * @see https://svelteuidev.github.io/svelteui/docs/utilities/raf-fn
 */
export function rafFn(fn: () => void, options: RafFnOptions = {}): Pauseable {
	const { immediate = true } = options;
	let isActive = false;

	async function loop() {
		if (!isActive) return;

		try {
			fn();

			if (browser) await window.requestAnimationFrame(loop);
		} catch (err) {
			console.error(err);
		}
	}

	function resume() {
		if (!isActive) {
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
