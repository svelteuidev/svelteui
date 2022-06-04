export type { GetSize } from './size/size';
export type { ColorShades } from './theme-color/theme-color';

import { themeColor } from './theme-color/theme-color.js';
import { size } from './size/size.js';
import { radius } from './radius/radius.js';

export interface Fn {
	themeColor: typeof fns.themeColor;
	size: typeof fns.size;
	radius: typeof fns.radius;
}

export const fns = {
	size,
	radius,
	themeColor
} as const;
