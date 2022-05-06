import type { TransitionConfig } from 'svelte/types/runtime/transition';
import type { TypewriterParams } from './typewriter.config';

/**
 * The typewriter transition will give your text a typed effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the typewriter transition on non text nodes, it will result in an error.
 *
 * ```tsx
 * <div transition:typewriter>Will be typed out</div>
 * <div transition:typewriter={{speed: 0.3}}>Will be typed out slower</div>
 * <div transition:typewriter={{speed: 2.5}}>Will be typed out faster</div>
 * ```
 *
 * @param params Optional params to pass to the transition
 * @see https://svelteui-docs.vercel.app/docs/motion/typewriter
 */
//prettier-ignore
export const typewriter = (node: HTMLElement, { speed = 1.2, easing }: TypewriterParams): TransitionConfig => {
	const isSingleTextNode = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!isSingleTextNode) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		easing,
		duration,
		tick: (t) => {
			const i = ~~(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
};
