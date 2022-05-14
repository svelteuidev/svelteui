import type { Action } from '../types';

/**
 * Creates `long press` event when mousedown is above the `duration` milliseconds..
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

	function handleMouseDown() {
		timer = window.setTimeout(() => {
			node.dispatchEvent(new CustomEvent('uselongpress'));
		}, duration);
	}

	function handleMouseUp() {
		clearTimeout(timer);
	}

	node.addEventListener('mousedown', handleMouseDown);
	node.addEventListener('mouseup', handleMouseUp);

	return {
		update(newDuration: number) {
			handleMouseUp();
			duration = newDuration;
		},
		destroy() {
			handleMouseUp();
			node.removeEventListener('mousedown', handleMouseDown);
			node.removeEventListener('mouseup', handleMouseUp);
		}
	};
}
