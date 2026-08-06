import type { Action, ActionReturn } from 'svelte/action';

interface Attributes {
	onlongpress: (e: CustomEvent) => void;
}

/**
 * Creates `long press` event when mousedown or touchstart is above the `duration` milliseconds.
 *
 * ```tsx
 *  <button use:longpress={duration} onlongpress={() => alert("longpress")}>
 *     press and hold
 *  </button>
 * ```
 * @param duration - The duration until the longpress event is dispatched
 * @see https://svelteui.dev/actions/use-longpress
 */
export const longpress: Action<HTMLElement, number, ActionReturn<number, Attributes>> = (
	node: HTMLElement,
	duration: number
) => {
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
			node.removeEventListener('touchend', handleRelease);
			node.removeEventListener('touchstart', handlePress);
			node.removeEventListener('mouseup', handleRelease);
			node.removeEventListener('mousedown', handlePress);
		}
	};
};
