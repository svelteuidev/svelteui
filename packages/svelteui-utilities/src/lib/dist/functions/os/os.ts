export type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux';

function getOS() {
	const { userAgent } = window.navigator;
	const { platform } = window.navigator;
	const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
	const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
	const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os: OS = 'undetermined';

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'macos';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'ios';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'windows';
	} else if (/iPhone|iPad|iPod/i.test(userAgent)) {
		os = 'ios';
	} else if (/Win/i.test(userAgent)) {
		os = 'windows';
	} else if (/Android/i.test(userAgent)) {
		os = 'android';
	} else if (/Mac/i.test(userAgent)) {
		os = 'macos';
	} else if (/Linux/i.test(userAgent)) {
		os = 'linux';
	}
	return os;
}

/**
 *
 * Util detects user os. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`. If os cannot be identified as well as during server side rendering `undetermined` will be returned.
 *
 * ```ts
 * const os = os()
 *
 * if (os === 'macos') {
 * 	key = 'cmd'
 * } else if (os === 'windows') {
 * 	key = 'ctrl'
 * }
 * ```
 *
 * @see https://svelteui.org/utilities/os
 */
export function os(): OS {
	if (typeof window !== 'undefined') {
		return getOS();
	}
	return 'undetermined';
}
