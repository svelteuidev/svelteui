import type { SvelteUINumberSize } from '$lib/styles-old';

export interface MenuContextValue {
	hovered: number;
	radius: SvelteUINumberSize;
	onItemHover(index: number);
	onItemKeyDown(event: KeyboardEvent): void;
	onItemClick(event: MouseEvent): void;
}
