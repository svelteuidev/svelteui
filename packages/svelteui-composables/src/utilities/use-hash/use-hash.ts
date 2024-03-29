import { browser } from '../../shared/utilities/utils/index.js';

/**
 * Util generates a random hash with a specified prefix. If you are looking to generate a random ID, then you should use the id utility.
 *
 * ```ts
 * const id = hash('my-library')
 * ```
 *
 * @param prefix prefix that is applied to the hash - defaults to `svelteui`
 *
 * @see https://svelteui.dev/utilities/hash
 */
export function useHash(prefix: string = 'svelteui', persist: boolean = false): string {
	if (persist && browser) {
		let hash = `${prefix}-${Math.random().toString(36).substring(2, 10)}`;

		if (localStorage[`${prefix}-hash`] !== undefined) {
			hash = localStorage.getItem(`${prefix}-hash`);
		} else {
			localStorage.setItem(`${prefix}-hash`, hash);
		}

		return hash;
	}
	return `${prefix}-${Math.random().toString(36).substring(2, 10)}`;
}
