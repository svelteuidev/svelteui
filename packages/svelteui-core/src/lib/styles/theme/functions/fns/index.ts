import { themeColor } from './theme-color/theme-color.js';
import { size } from './size/size.js';
import { radius } from './radius/radius.js';

export type { GetSize } from './size/size';
export type { ColorShades } from './theme-color/theme-color';

export const fns = {
	size,
	radius,
	themeColor
} as const;
