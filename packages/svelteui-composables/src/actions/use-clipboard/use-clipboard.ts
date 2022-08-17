import type { Action } from '../../shared/actions/types';

/**
 * With the `use-clipboard` action, text passed into the text param will be copied to the users clipboard.
 *
 * ```tsx
 *  <button use:clipboard={'This text will be copied'}>Copy Me</button>
 * ```
 * @param text - The text that you want to be copied when the DOM element is clicked
 * @see https://svelteui.org/actions/use-clipboard
 */
export function clipboard(node: HTMLElement, text: string): ReturnType<Action> {
	const click = async () => {
		if (text)
			try {
				await navigator.clipboard.writeText(text);

				node.dispatchEvent(new CustomEvent('useclipboard', { detail: text }));
			} catch (e) {
				node.dispatchEvent(new CustomEvent('useclipboard-error', { detail: e }));
			}
	};

	node.addEventListener('click', click, true);

	return {
		update: (t: string) => (text = t),
		destroy: () => node.removeEventListener('click', click, true)
	};
}
