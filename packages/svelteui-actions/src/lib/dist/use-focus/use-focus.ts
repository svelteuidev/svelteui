import type { Action, FocusableElement } from '../types/ActionTypes';

/**
 * With the `use-focus` action, the affected dom node gets focused when it is mounted into the dom. Only “focusable” elements should use this action. Type errors will appear if this is not the case.
 *
 * ```tsx
 *  <button use:clipboard={'This text will be copied'}>Copy Me</button>
 * ```
 * @see https://svelteui-docs.vercel.app/docs/actions/use-focus
 */
export function focus(node: FocusableElement): ReturnType<Action> {
	node.focus();

	return;
}
