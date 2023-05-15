import type { TransitionConfig } from 'svelte/types/runtime/transition';
import type { FlipboardParams } from './flipboard.config';

/**
 * The flipboard transition that displays text with a glitch like effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the flipboard transition on non text nodes, it will result in an error.
 *
 * ```tsx
 * <div transition:flipboard>Will be typed out</div>
 * ```
 *
 * @param params Optional params to pass to the transition
 * @see https://svelteui.org/motion/flipboard
 */
//prettier-ignore
export function flipboard(node: HTMLElement, {delay = 0, duration = 400, easing}: FlipboardParams): TransitionConfig {
	const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	const text = node.textContent.trim();

	let lastTime = 0;

	return {
		delay,
        duration,
        easing,
		tick(t) {
			if (t === 1) {
				node.textContent = text;
				return;
			}

			const now = Date.now();
			if (now - lastTime < 32) return;
			lastTime = now;

			let str = '';
			for (let i = 0; i < text.length; i++) {
				const progress = i / text.length;
				if (text[i] === ' ' || progress < t * 0.9) {
					str += text[i];
				} else if (progress < t * 1.5) {
					str += randomChars[Math.floor(Math.random() * randomChars.length)];
				} else if (progress < t * 2) {
					str += '-';
				} else {
					str += ' ';
				}
			}
			node.textContent = str;
		}
	};
}
