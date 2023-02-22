import type { Action } from '../../shared/actions/types';
import { FOCUS_SELECTOR, focusable, tabbable } from './tabbable';
import { scopeTab } from './scope-tab';
import { createAriaHider } from './create-aria-hider';

/**
 * With the `use-focus-trap` action, the first focusable child gets the focus in the provided affected dom node
 *
 * ```tsx
 *  <div use:focustrap>
 *    <input placeholder="Focused" />
 *  </div>
 * ```
 * @see https://svelteui.org/actions/use-focus-trap
 */
export function focustrap(node: HTMLElement, active = true): ReturnType<Action> | undefined {
	let restoreAria: (() => void) | null = null;

	const handleKeyDown = (event: KeyboardEvent) => {
		if (!active) {
			return;
		}

		if (event.key === 'Tab' && node) {
			scopeTab(node, event);
		}
	};

	document.addEventListener('keydown', handleKeyDown);

	activate();

	// since action called only once and don't rerun on params update we have to make a function
	// which we can call on initialization and update
	function activate() {
		if (!active) {
			if (restoreAria) {
				restoreAria();
			}
			return;
		}

		restoreAria = createAriaHider(node);

		const processNode = () => {
			let focusElement: HTMLElement | null = node.querySelector('[autofocus]');

			if (!focusElement) {
				const children = Array.from<HTMLElement>(node.querySelectorAll(FOCUS_SELECTOR));
				focusElement = children.find(tabbable) || children.find(focusable) || null;
				if (!focusElement && focusable(node)) focusElement = node;
			}

			if (focusElement) {
				focusElement.focus({ preventScroll: true });
			} else if (process.env.NODE_ENV === 'development') {
				// eslint-disable-next-line no-console
				console.warn(
					'[@svelteuidev/composables/use-focus-trap] Failed to find focusable element within provided node',
					node
				);
			}
		};

		// Delay processing the HTML node by a frame. This ensures focus is assigned correctly.
		setTimeout(() => {
			if (node.getRootNode()) {
				processNode();
			} else if (process.env.NODE_ENV === 'development') {
				// eslint-disable-next-line no-console
				console.warn('[@svelteuidev/composables/use-focus-trap] node is not part of the dom', node);
			}
		});
	}

	return {
		update(newActive) {
			active = newActive;
			activate();
		},
		destroy() {
			document.removeEventListener('keydown', handleKeyDown);

			if (restoreAria) {
				restoreAria();
			}
		}
	};
}
