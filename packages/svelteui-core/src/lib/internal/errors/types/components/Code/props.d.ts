import type { SvelteuiColor, Override } from '$lib/styles/types';

export interface CodeProps {
	class?: string;
	override?: Override['props'];
	color?: SvelteuiColor;
	block?: boolean;
	width?: number;
	copy?: boolean;
	message?: string;
	noMono?: boolean;
}
