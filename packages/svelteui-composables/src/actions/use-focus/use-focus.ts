import type { Action, FocusableElement } from '../../shared/actions/types';

/**
 * With the `use-focus` action, the affected dom node gets focused when it is mounted into the dom. Only “focusable” elements should use this action. Type errors will appear if this is not the case.
 *
 * ```tsx
 *  <input use:focus placeholder="Focused"/>
 * ```
 * @see https://svelteui.org/actions/use-focus
 */
export function focus(node: FocusableElement): ReturnType<Action> | undefined {
	node.focus();

	return;
}
