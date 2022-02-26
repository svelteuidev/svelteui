import type { Action } from '../types/_types';

/**
 *
 * Call callback when user clicks outside a given element
 *
 * Usage: <div use:clickoutside={{ enabled: open, callback: () => open = false }}>
 *
 *
 */
export function clickoutside(
	node: HTMLElement,
	params: { enabled: boolean; callback: Function }
): ReturnType<Action> {
	const { enabled: initialEnabled, callback } = params;

	const handleOutsideClick = ({ target }: MouseEvent) => {
		if (!node.contains(target as Node)) callback(node); // typescript hack, not sure how to solve without asserting as Node
	};

	function update({ enabled }: { enabled: boolean }) {
		if (enabled) {
			window.addEventListener('click', handleOutsideClick);
		} else {
			window.removeEventListener('click', handleOutsideClick);
		}
	}
	update({ enabled: initialEnabled });
	return {
		update,
		destroy() {
			window.removeEventListener('click', handleOutsideClick);
		}
	};
}
