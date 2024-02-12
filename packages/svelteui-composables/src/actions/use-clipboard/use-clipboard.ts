import type { Action } from '../../shared/actions/types';

/**
 * With the `use-clipboard` action, text passed into the text param will be copied to the users clipboard.
 *
 * ```tsx
 *  <button use:clipboard={'This text will be copied'}>Copy Me</button>
 * ```
 * or
 *
 * ```tsx
 *  <button use:clipboard={() => `This text will be copied at ${new Date().toUTCString()}`}>Copy Me</button>
 * ```
 *
 * @param text - The text that you want to be copied when the DOM element is clicked
 * @see https://svelteui.dev/actions/use-clipboard
 */
export function clipboard(node: HTMLElement, text: string | (() => string)): ReturnType<Action> {
	const click = async () => {
		const detailText = typeof text === 'function' ? text() : text;
		if (detailText)
			try {
				await navigator.clipboard.writeText(detailText);

				node.dispatchEvent(new CustomEvent('useclipboard', { detail: detailText }));
			} catch (e) {
				node.dispatchEvent(new CustomEvent('useclipboard-error', { detail: e }));
			}
	};

	node.addEventListener('click', click, true);

	return {
		update: (t: string | (() => string)) => (text = t),
		destroy: () => node.removeEventListener('click', click, true)
	};
}
