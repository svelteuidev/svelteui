import type { SvelteUIColor } from '$lib/styles';

export interface LoaderPropsExtended extends Partial<SVGElement> {
	size: number;
	color: SvelteUIColor;
}
