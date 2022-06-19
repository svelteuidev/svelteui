import { useSvelteUIThemeContext } from '../../../SvelteUIProvider';
import type { SvelteUINumberSize } from '$lib/styles';

export function radius(radii?: SvelteUINumberSize): number | string {
	const theme = useSvelteUIThemeContext().theme;

	if (typeof radii === 'number') {
		return radii;
	}

	return theme.radii[radii].value;
}
