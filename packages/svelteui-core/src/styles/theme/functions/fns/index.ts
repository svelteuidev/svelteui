import { themeColor } from './theme-color/theme-color.js';
import { size } from './size/size.js';
import { radius } from './radius/radius.js';
import { variant } from './variant/variant.js';
import { rgba } from './rgba/rgba.js';

export type { GetSize } from './size/size';
export type { ColorShades } from './theme-color/theme-color';

export const fns = {
	size,
	radius,
	themeColor,
	variant,
	rgba
} as const;
