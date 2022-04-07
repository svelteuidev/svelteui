import type { SvelteuiColor } from './SvelteuiColor';

export interface SvelteuiGradient {
	from: SvelteuiColor;
	to: SvelteuiColor;
	deg?: number;
}
