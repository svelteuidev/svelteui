import type { SvelteUINumberSize } from '$lib/styles';

export interface MenuContextValue {
	hovered: number;
	radius: SvelteUINumberSize;
	onItemHover(index: number);
	onItemKeyDown(event: KeyboardEvent): void;
	onItemClick(event: MouseEvent): void;
}
