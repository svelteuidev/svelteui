import { writable } from 'svelte/store';
import { browser, defaultWindow } from '../../utils';
import type { Writable } from '../../types';

export interface EyeDropperOpenOptions {
	signal?: AbortSignal;
}

export interface EyeDropper {
	new (): EyeDropper;
	open: (options?: EyeDropperOpenOptions) => Promise<{ sRGBHex: string }>;
	[Symbol.toStringTag]: 'EyeDropper';
}

export interface EyeDropperOptions {
	initialValue?: string;
}

export interface EyeDropperReturn {
	isSupported: boolean;
	sRGBHex: Writable<string>;
	open: (openOptions?: EyeDropperOpenOptions) => Promise<{ sRGBHex: string }>;
}

/**
 * A reactive [EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
 *
 * @param options - an object containing the initial value of the sRGBHex value
 * @returns
 */
export function eyeDropper(options: EyeDropperOptions = {}): EyeDropperReturn {
	let window: Window;
	if (browser) window = defaultWindow;

	const { initialValue = '' }: EyeDropperOptions = options;
	const isSupported = Boolean(typeof window !== 'undefined' && 'EyeDropper' in window);
	const sRGBHex = writable(initialValue);

	async function open(openOptions?: EyeDropperOpenOptions) {
		if (!isSupported) return;
		const eyeDropper: EyeDropper = new (window as any).EyeDropper();
		const res = await eyeDropper.open(openOptions);
		sRGBHex.set(res.sRGBHex);
		return res;
	}

	return {
		isSupported,
		sRGBHex,
		open
	};
}
