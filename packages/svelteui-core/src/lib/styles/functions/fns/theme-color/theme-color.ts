import { theme } from '../../../index.js';
import type { SvelteUIColor } from '../../../index';

type ColorShades = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export function themeColor(color: SvelteUIColor, shade: ColorShades = 0) {
	let _shade = '50';

	if (shade !== Number(0)) _shade = `${shade.toString()}00`;

	return theme.colors[`${color}${_shade}`].value;
}
