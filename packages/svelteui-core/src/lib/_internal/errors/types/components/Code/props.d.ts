import type { SvelteuiColor, Override } from '$lib/_styles/types';

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
