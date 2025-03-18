// adapted from romkor/svelte-portal
import { tick } from 'svelte';
import type { Action, ActionReturn } from 'svelte/action';

type Target = HTMLElement | string;

/**
 * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
 *
 * @param target- DOM element or CSS selector to be appended to
 * @see https://svelteui.dev/actions/use-portal
 */
export const portal: Action<HTMLElement, Target, ActionReturn<Target>> = (
	node: HTMLElement,
	target: Target = 'body'
) => {
	let targetNode;

	async function update(newTarget: Target) {
		target = newTarget;
		if (typeof target === 'string') {
			targetNode = document.querySelector(target);
			if (targetNode === null) {
				await tick();
				targetNode = document.querySelector(target);
			}
			if (targetNode === null) {
				throw new Error(`No element found matching css selector: "${target}"`);
			}
		} else if (target instanceof HTMLElement) {
			targetNode = target;
		} else {
			throw new TypeError(
				`Unknown portal target type: ${
					target === null ? 'null' : typeof target
				}. Allowed types: string (CSS selector) or HTMLElement.`
			);
		}
		targetNode.appendChild(node);
		node.hidden = false;
	}

	function destroy() {
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}

	update(target);

	return {
		update,
		destroy
	};
};
