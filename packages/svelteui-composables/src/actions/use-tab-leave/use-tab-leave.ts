import type { Action, Fn } from '../../shared/actions/types';

export function tableave(node: HTMLElement, callback: Fn<void>): ReturnType<Action> {
	document.addEventListener('visibilitychange', callback);

	return {
		destroy() {
			document.removeEventListener('visibilitychange', callback);
		}
	};
}
