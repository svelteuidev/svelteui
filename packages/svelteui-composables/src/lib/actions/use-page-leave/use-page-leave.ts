import type { Action, Fn } from '../../shared/actions/types';

export function pageleave(node: HTMLElement, callback: Fn<void>): ReturnType<Action> {
	document.documentElement.addEventListener('mouseleave', callback);

	return {
		destroy() {
			document.documentElement.removeEventListener('mouseleave', callback);
		}
	};
}
