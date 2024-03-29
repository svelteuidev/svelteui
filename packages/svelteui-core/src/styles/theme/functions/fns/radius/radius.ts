import { useSvelteUITheme, useSvelteUIThemeContext } from '../../../SvelteUIProvider';
import type { SvelteUINumberSize } from '../../../types';

export function radius(radii?: SvelteUINumberSize): number | string {
	const theme = useSvelteUIThemeContext()?.theme || useSvelteUITheme();

	if (typeof radii === 'number') {
		return radii;
	}

	return theme.radii[radii].value;
}
