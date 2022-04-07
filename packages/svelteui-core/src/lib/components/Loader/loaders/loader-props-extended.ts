import type { SvelteuiColor } from '$lib/styles';

export interface LoaderPropsExtended extends Partial<SVGElement> {
	size: number;
	color: SvelteuiColor;
}
