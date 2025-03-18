import type { Action, ActionReturn } from 'svelte/action';

interface Attributes {
	onuseclipboard: (e: CustomEvent<string>) => void;
	'onuseclipboard-error': (e: CustomEvent<string>) => void;
}

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
export const clipboard: Action<
	HTMLElement,
	string | (() => string),
	ActionReturn<string | (() => string), Attributes>
> = (node: HTMLElement, text: string | (() => string)) => {
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
};
