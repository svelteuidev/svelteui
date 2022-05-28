import { writable } from 'svelte/store';
import type { Action, Writable } from '../../types';

export interface MousePosition {
	position: Writable<{ x: number; y: number }>;
	mouseposition: Action;
}

export function mousePosition(append: boolean = false): MousePosition {
	const position = writable({ x: 0, y: 0 });

	const setMousePosition = (event: MouseEvent) => {
		if (append === false) {
			const target = event.currentTarget as Element;
			const rect = target.getBoundingClientRect();

			const x = Math.max(
				0,
				Math.round(event.pageX - rect.left - (window.pageXOffset || window.scrollX))
			);
			const y = Math.max(
				0,
				Math.round(event.pageY - rect.top - (window.pageYOffset || window.scrollY))
			);
			position.set({ x, y });
		} else {
			position.set({ x: event.clientX, y: event.clientY });
		}
	};

	return {
		position,
		mouseposition: (node: HTMLElement) => {
			const element = !append ? node : document;
			element.addEventListener('mousemove', setMousePosition as any);

			return {
				destroy: () => {
					element.removeEventListener('mousemove', setMousePosition as any);
				}
			};
		}
	};
}
