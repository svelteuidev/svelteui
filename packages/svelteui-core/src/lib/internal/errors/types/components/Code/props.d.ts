import type { SvelteUIColor, Override } from '$lib/styles/types';

export interface CodeProps {
	class?: string;
	override?: Override['props'];
	color?: SvelteUIColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
}
