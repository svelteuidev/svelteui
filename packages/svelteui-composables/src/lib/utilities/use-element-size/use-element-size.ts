import { writable } from 'svelte/store';
import { browser } from '../../shared/utilities/utils/index.js';
import type { Action, Writable } from '../../shared/utilities/types';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

export type ElementSize = [Writable<ObserverRect>, Action];

const defaultState: ObserverRect = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
	top: 0,
	left: 0,
	bottom: 0,
	right: 0
};

export function useElementSize(): ElementSize {
	const size = writable(defaultState);

	const elementsize = (node: HTMLElement) => {
		let frameID = 0;

		const observer = browser
			? new ResizeObserver((entries: any) => {
					const entry = entries[0];

					if (entry) {
						cancelAnimationFrame(frameID);

						frameID = requestAnimationFrame(() => {
							size.set(entry.contentRect);
						});
					}
			  })
			: null;

		observer.observe(node);

		return {
			destroy: () => {
				observer.disconnect();
				cancelAnimationFrame(frameID);
			}
		};
	};
	return [size, elementsize];
}
