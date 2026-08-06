import type { SvelteUIColor } from './SvelteUIColor';

export interface SvelteUIGradient {
	from: SvelteUIColor;
	to: SvelteUIColor;
	deg?: number;
}
