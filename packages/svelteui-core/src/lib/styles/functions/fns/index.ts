export type { GetSize } from './size/size';
export type { ColorShades } from './theme-color/theme-color';

import { themeColor } from './theme-color/theme-color.js';
import { size } from './size/size.js';

export const fns = {
	themeColor,
	size
} as const;
