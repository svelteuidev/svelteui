import type { ActionReturn } from 'svelte/action';
import type { Fn } from '../../shared/actions/types';

export function tableave(node: HTMLElement, callback: Fn<void>): ActionReturn {
	document.addEventListener('visibilitychange', callback);

	return {
		destroy() {
			document.removeEventListener('visibilitychange', callback);
		}
	};
}
