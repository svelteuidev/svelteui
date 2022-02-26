import type { TransitionConfig } from 'svelte/types/runtime/transition';
import type { TypewriterParams } from '../types';

/**
 *
 * @param node HTMLElement that the transition is applied to
 * @param params Optional params to pass to the transition
 * @returns A duration and tick function
 * @example <div transition:typewriter>Will be typed out</div>
 */
//prettier-ignore
export const typewriter = (node: HTMLElement, { speed = 1.2 }: TypewriterParams): TransitionConfig => {
	const isSingleTextNode = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!isSingleTextNode) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
};
