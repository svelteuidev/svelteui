import { writable } from 'svelte/store';
import { browser, defaultWindow } from '../../shared/utilities/utils/index.js';
import type { Writable } from '../../shared/utilities/types';

export interface EyeDropperOpenOptions {
	signal?: AbortSignal;
}

export interface EyeDropper {
	// eslint-disable-next-line @typescript-eslint/no-misused-new
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
export function useEyeDropper(options: EyeDropperOptions = {}): EyeDropperReturn {
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
