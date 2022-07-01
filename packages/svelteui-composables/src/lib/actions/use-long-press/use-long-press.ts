import type { Action } from '../../shared/actions/types';

/**
 * Creates `long press` event when mousedown or touchstart is above the `duration` milliseconds.
 *
 * ```tsx
 *  <button use:longpress={duration} on:uselongpress={() => alert("longpress")}>
 *     press and hold
 *  </button>
 * ```
 * @param duration - The duration until the longpress event is dispatched
 * @see https://svelteui.org/actions/use-longpress
 */
export function longpress(node: HTMLElement, duration: number): ReturnType<Action> {
	let timer: number;

	function handlePress() {
		timer = window.setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	}

	function handleRelease() {
		clearTimeout(timer);
	}

	node.addEventListener('mousedown', handlePress);
	node.addEventListener('mouseup', handleRelease);
	node.addEventListener('touchstart', handlePress);
	node.addEventListener('touchend', handleRelease);

	return {
		update(newDuration: number) {
			handleRelease();
			duration = newDuration;
		},
		destroy() {
			handleRelease();
			node.removeEventListener('mousedown', handlePress);
			node.removeEventListener('mouseup', handleRelease);
			node.removeEventListener('touchstart', handlePress);
			node.removeEventListener('touchstart', handleRelease);
		}
	};
}
