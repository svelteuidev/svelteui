// This file taken from rgossiaux/svelte-headlessui
// Copyright 2020-present Hunter Perrin

import type { Action, ActionReturn } from 'svelte/action';

export type ActionEntry<N = HTMLElement, P = any> =
	| Action<N, P, ActionReturn<unknown>>
	| [Action<N, P, ActionReturn<unknown>>, P];

export type ActionArray = ActionEntry[];

export function useActions(node: HTMLElement | SVGElement, actions: ActionArray) {
	const actionReturns: (void | ActionReturn<unknown | undefined>)[] = [];

	if (actions) {
		for (let i = 0; i < actions.length; i++) {
			const actionEntry = actions[i];
			const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
			if (Array.isArray(actionEntry) && actionEntry.length > 1) {
				actionReturns.push(action(node as HTMLElement & SVGElement, actionEntry[1]));
			} else {
				actionReturns.push(action(node as HTMLElement & SVGElement));
			}
		}
	}

	return {
		update(actions: ActionArray) {
			if (((actions && actions.length) || 0) != actionReturns.length) {
				throw new Error('You must not change the length of an actions array.');
			}

			if (actions) {
				for (let i = 0; i < actions.length; i++) {
					const returnEntry = actionReturns[i];
					if (returnEntry && returnEntry.update) {
						const actionEntry = actions[i];
						if (Array.isArray(actionEntry) && actionEntry.length > 1) {
							returnEntry.update(actionEntry[1]);
						} else {
							returnEntry.update(undefined);
						}
					}
				}
			}
		},

		destroy() {
			for (let i = 0; i < actionReturns.length; i++) {
				const returnEntry = actionReturns[i];
				if (returnEntry && returnEntry.destroy) {
					returnEntry.destroy();
				}
			}
		}
	};
}
