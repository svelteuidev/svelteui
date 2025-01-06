import type { Action, ActionReturn } from 'svelte/action';
import type { Fn } from '../../shared/actions/types';

export const pageleave: Action<HTMLElement, Fn<void>, ActionReturn> = (
	node: HTMLElement,
	callback: Fn<void>
) => {
	document.documentElement.addEventListener('mouseleave', callback);

	return {
		destroy() {
			document.documentElement.removeEventListener('mouseleave', callback);
		}
	};
};
