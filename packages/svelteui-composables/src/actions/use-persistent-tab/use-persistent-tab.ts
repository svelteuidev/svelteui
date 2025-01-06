import type { Action, ActionReturn } from 'svelte/action';

/**
 * With the `use-persistenttab` action, prevent current tab from being closed by user.
 *
 * ```svelte
 *  <button use:persistenttab={true}>Keep tab open</button>
 * ```
 * @param enabled - Determines whether the action should execute or not.
 * @see https://svelteui.dev/actions/use-persistenttab
 */
export const persistenttab: Action<HTMLElement, boolean, ActionReturn<boolean>> = (
	node: HTMLElement,
	enabled: boolean
) => {
	function handler(e: BeforeUnloadEvent) {
		e.preventDefault();
		e.returnValue = '';
	}

	function setHandler(prevent: boolean) {
		(prevent ? window.addEventListener : window.removeEventListener)('beforeunload', handler);
	}

	setHandler(enabled);

	return {
		update: setHandler,
		destroy() {
			setHandler(false);
		}
	};
};
