import type { Action } from '../../shared/actions/types';

/**
 * With the `use-persistenttab` action, prevent current tab from being closed by user.
 *
 * ```svelte
 *  <button use:persistenttab={true}>Keep tab open</button>
 * ```
 * @param enabled - Determines whether the action should execute or not.
 * @see https://svelteui.dev/actions/use-persistenttab
 */
export function persistenttab(node: HTMLElement, enabled: boolean): ReturnType<Action> {
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
}
