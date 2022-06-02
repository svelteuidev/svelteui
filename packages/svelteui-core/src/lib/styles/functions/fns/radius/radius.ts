import { theme as _theme } from '../../../index';
import type { SvelteUINumberSize } from '../../../types';

export function radius(radii?: SvelteUINumberSize): number | string {
	const theme = _theme;

	if (typeof radii === 'number') {
		return radii;
	}

	return theme.radii[radii].value;
}
