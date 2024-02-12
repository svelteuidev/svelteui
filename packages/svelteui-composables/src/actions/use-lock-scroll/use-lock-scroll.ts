import { createStyleTag } from './utils/create-style-tag.js';
import { getLockStyles } from './utils/get-lock-styles.js';
import { injectStyles } from './utils/inject-style-tag.js';
import { insertStyleTag } from './utils/insert-style-tag.js';
import { ENVIRONMENT, defaultWindow } from '../../shared/actions/utils/environment.js';
import type { Action } from '../../shared/actions/types';

interface LockScrollOptions {
	disableBodyPadding: boolean;
}

/**
 *

 * @returns
 */

/**
 * use-lock-scroll locks scroll at current position by setting document.body overflow to hidden.
 *
 * ```tsx
 * <div use:lockscroll={visible}>Can't scroll anymore</div>
 * ```
 *
 * @param lock - A boolean to specify whether or not to lock the screen
 * @param options - An object to specify offset width
 * @see https://svelteui.dev/actions/use-lock-scroll
 */
export function lockscroll(
	node: HTMLElement,
	lock?: boolean,
	options: LockScrollOptions = { disableBodyPadding: false }
): ReturnType<Action> {
	const { browser } = ENVIRONMENT;
	let window: Window;

	if (browser) {
		window = defaultWindow;
	}

	let scrollLocked = lock ?? false;

	const { disableBodyPadding } = options;

	let stylesheet;

	const lockScroll = () => {
		const styles = getLockStyles({ disableBodyPadding });

		const sheet = createStyleTag();
		injectStyles(sheet, styles);
		insertStyleTag(sheet);

		stylesheet = sheet;
	};

	const unlockScroll = () => {
		if (!stylesheet) return;

		stylesheet?.parentNode?.removeChild(stylesheet);
		stylesheet = null;
	};

	if (scrollLocked) {
		lockScroll();
	} else {
		unlockScroll();
	}

	if (lock !== undefined) {
		scrollLocked = lock;
	}

	if (lock === undefined && typeof window !== 'undefined') {
		window.document.body.style.overflow === 'hidden' && (scrollLocked = lock);
	}

	return {
		update: (locked: boolean) => {
			if (locked) {
				lockScroll();
			} else {
				window.document.body.style.overflow === 'visible' && (scrollLocked = lock);
				unlockScroll();
			}
		},
		destroy: () => {
			unlockScroll();
			return;
		}
	};
}
