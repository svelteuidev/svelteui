import type { SvelteUINumberSize } from '$lib/styles';

export interface MenuContextValue {
	hovered: number;
	radius: SvelteUINumberSize;
	onItemHover(index: number | ((...args: any[]) => void | number)): void;
	onItemKeyDown(event: KeyboardEvent): void;
	onItemClick(): void;
}
