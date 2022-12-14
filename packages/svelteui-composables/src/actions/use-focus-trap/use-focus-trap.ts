import type { Action, FocusableElement } from '../../shared/actions/types';

const FOCUSABLE = 'input, textarea, select, a, button, [tabindex]:not([tabindex="-1"])';

/**
 * With the `use-focus-trap` action, the first focusable child gets the focus in the provided affected dom node
 *
 * ```tsx
 *  <div use:focus-trap>
 *    <input placeholder="Focused" />
 *  </div>
 * ```
 * @see https://svelteui.org/actions/use-focus-trap
 */
export function focustrap(node: HTMLElement): ReturnType<Action> | undefined {
	let focusElement = node.querySelector('[data-autofocus]') as FocusableElement;

	if (!focusElement) {
		const focusableElements = node.querySelectorAll(FOCUSABLE);
		if (focusableElements.length === 0) {
			if (process.env.NODE_ENV === 'development') {
				console.warn('[@svelteuidev/composables/use-focus-trap] No focusable children in element');
			}
			return;
		}
		focusElement = focusableElements[0] as FocusableElement;
	}

	setTimeout(() => focusElement?.focus({ preventScroll: true }), 0);
}
