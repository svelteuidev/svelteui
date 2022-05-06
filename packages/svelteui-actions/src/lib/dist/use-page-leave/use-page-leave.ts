import type { Action, Fn } from '../types';

export function pageleave(node: HTMLElement, callback: Fn<void>): ReturnType<Action> {
	document.documentElement.addEventListener('mouseleave', callback);

	return {
		destroy() {
			document.documentElement.removeEventListener('mouseleave', callback);
		}
	};
}
