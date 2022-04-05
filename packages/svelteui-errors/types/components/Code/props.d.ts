import type { SvelteuiColor, Override } from '../../index';

export interface CodeProps {
	[x: string]: any;
	class?: string;
	override?: Override['props'];
	color?: SvelteuiColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
}
