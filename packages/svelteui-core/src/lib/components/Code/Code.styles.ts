import type { SvelteuiColor } from '$lib/styles';

export interface GetVariantStyles {
	color: SvelteuiColor;
	variant: 'filled' | 'light' | 'outline' | 'default' | 'white' | 'gradient' | 'subtle';
	gradient?: { from: SvelteuiColor; to: SvelteuiColor; deg: number };
}
