import { writable } from 'svelte/store';
import { browser, defaultWindow } from '../../utils/index.js';
import type { Writable } from '../../types';

const listenerOptions = {
	passive: true
};

export function viewportSize(): Writable<{ width: number; height: number }> {
	let window: Window;
	if (browser) window = defaultWindow;

	const windowSize = writable({
		width: browser ? window.innerWidth : 0,
		height: browser ? window.innerHeight : 0
	});

	const setSize = () => {
		windowSize.set({
			width: window.innerWidth || 0,
			height: window.innerHeight || 0
		});
	};

	if (browser) {
		window.addEventListener('resize', setSize, listenerOptions);
		window.addEventListener('orientationchange', setSize, listenerOptions);
	}

	return windowSize;
}
