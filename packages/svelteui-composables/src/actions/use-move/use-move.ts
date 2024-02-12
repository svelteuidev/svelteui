import { clamp } from '../../shared';
import type { Action } from '../../shared/actions/types';

/**
 * Handles the movement of any element inside a node, following the mouse or touch events.
 *
 * ```svelte
 *  <div use:move on:move={(event: { detail: { x: number; y: number } }) => { position = event.detail }}}>
 *     <div style="left: {position.x * 100}%; top: {position.y * 100}%;" />
 *  </div>
 * ```
 * @see https://svelteui.dev/actions/use-move
 */
export function move(node: HTMLElement): ReturnType<Action> {
	let moving: boolean = false;
	let active: boolean = false;
	let frame: number = 0;

	function bindListeners() {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
		document.addEventListener('touchmove', onTouchMove);
		document.addEventListener('touchend', onTouchEnd);
	}

	function unbindListeners() {
		document.removeEventListener('touchend', onTouchEnd);
		document.removeEventListener('touchmove', onTouchMove);
		document.removeEventListener('mouseup', onMouseUp);
		document.removeEventListener('mousemove', onMouseMove);
	}

	function startMove() {
		if (moving) return;

		moving = true;
		active = true;
		node.dispatchEvent(new CustomEvent('move:start'));
		bindListeners();
	}

	function _move(x: number, y: number) {
		cancelAnimationFrame(frame);

		frame = requestAnimationFrame(() => {
			const { left, top, width, height } = node.getBoundingClientRect();

			if (!width || !height) return;
			node.dispatchEvent(
				new CustomEvent('move', {
					detail: {
						x: clamp({ value: (x - left) / width, min: 0, max: 1 }),
						y: clamp({ value: (y - top) / height, min: 0, max: 1 })
					}
				})
			);
		});
	}

	function stopMove() {
		if (!moving) return;

		moving = false;
		active = false;
		unbindListeners();
		node.dispatchEvent(new CustomEvent('move:stop'));
	}

	function onMouseDown(event: MouseEvent) {
		startMove();
		onMouseMove(event);
	}

	function onMouseMove(event: MouseEvent) {
		_move(event.clientX, event.clientY);
	}

	function onMouseUp() {
		stopMove();
	}

	function onTouchStart(event: TouchEvent) {
		startMove();
		onTouchMove(event);
	}

	function onTouchMove(event: TouchEvent) {
		_move(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
	}

	function onTouchEnd() {
		stopMove();
	}

	node.addEventListener('mousedown', onMouseDown);
	node.addEventListener('touchstart', onTouchStart);

	return {
		destroy() {
			unbindListeners();
			node.removeEventListener('touchstart', onTouchStart);
			node.removeEventListener('mousedown', onMouseDown);
		}
	};
}
