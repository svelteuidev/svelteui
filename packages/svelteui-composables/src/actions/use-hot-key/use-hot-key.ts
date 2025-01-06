import type { ActionReturn } from 'svelte/action';
import { getHotkeyHandler, getHotkeyMatcher } from './parse-hotkey.js';
export { getHotkeyHandler };

export type HotkeyItem = [string, (event: KeyboardEvent) => void];

function shouldFireEvent(event: KeyboardEvent) {
	if (event.target instanceof HTMLElement) {
		return !['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName);
	}
}

/**
 * Listen for keys combinations on the document element, if you need to listen for keybindings on a specific element then you will need to use the getHotkeyHandler function instead.
 *
 * @example
 * ```tsx
 *  <div
 * 		use:hotkey={[
 *             ['mod+Enter', () => console.log('Command/Ctrl + enter')],
 * 			['shift + 4', toggle()]
 *         ]}
 *  >
 * 		Keybindings added to document element
 *  </div>
 * ```
 * @param hotkeys - an array of HotKeyItem's which are arrays of key combinations and callback functions
 * @see https://svelteui.dev/actions/use-hotkey
 */
export function hotkey(node: HTMLElement, hotkeys: HotkeyItem[]): ActionReturn<HotkeyItem[]> {
	const keyDownListener = (event: KeyboardEvent) => {
		hotkeys.forEach(([hotkey, handler]) => {
			if (getHotkeyMatcher(hotkey)(event) && shouldFireEvent(event)) {
				event.preventDefault();
				handler(event);
			}
		});
	};

	document.documentElement.addEventListener('keydown', keyDownListener);

	return {
		update: (updatedHotKeys: HotkeyItem[]) => {
			hotkeys = updatedHotKeys;
		},
		destroy: () => {
			document.documentElement.removeEventListener('keydown', keyDownListener);
		}
	};
}
