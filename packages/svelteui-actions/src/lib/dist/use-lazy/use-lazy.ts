import type { Action } from '../types';

const nodeAttributesMap = new WeakMap<HTMLElement, object>();

const intersection_handler: IntersectionObserverCallback = (entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && entry.target instanceof HTMLElement) {
			const node = entry.target;
			Object.assign(node, nodeAttributesMap.get(node));
			lazyLoadObserver.unobserve(node);
		}
	});
};

let lazyLoadObserver: IntersectionObserver;

function observer() {
	return (lazyLoadObserver ??= new IntersectionObserver(intersection_handler));
}

// prettier-ignore
/**
 * With the `use-lazy` action, you can set attributes on an element when it is visible in the viewport.
 *
 * @example
 * ```svelte
 *  <img use:lazy={{src:"/my-image"}} alt="My Image">
 * ```
 * @param attributes - an object whose properties are the attributes to be applied, and the values are the attr values
 * @see https://svelteuidev.github.io/svelteui/docs/actions/use-lazy
 */
export function lazy(node: HTMLElement, attributes: Record<string, number | string>): ReturnType<Action> {
    nodeAttributesMap.set(node, attributes);

	observer().observe(node);

	return {
		destroy() {
			observer().unobserve(node);
		}
	};
}
