import type { ActionReturn } from 'svelte/action';
import type { Fn } from '../../shared/actions/types';

export function pageleave(node: HTMLElement, callback: Fn<void>): ActionReturn {
	document.documentElement.addEventListener('mouseleave', callback);

	return {
		destroy() {
			document.documentElement.removeEventListener('mouseleave', callback);
		}
	};
}
