import type { Action, ActionReturn } from 'svelte/action';
import type { Fn } from '../../shared/actions/types';

export const tableave: Action<HTMLElement, Fn<void>, ActionReturn> = (
	node: HTMLElement,
	callback: Fn<void>
) => {
	document.addEventListener('visibilitychange', callback);

	return {
		destroy() {
			document.removeEventListener('visibilitychange', callback);
		}
	};
};
