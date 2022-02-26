import type { TransitionConfig } from 'svelte/types/runtime/transition';
import type { FlipboardParams } from '../types';

/**
 *
 * @param node HTMLElement that the transition is applied to
 * @param params Optional params to pass to the transition
 * @returns A transition that displays text in a glitching format
 * @example <div transition:flipboard>Will be typed out</div>
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
