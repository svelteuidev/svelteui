import type { SvelteuiColor } from '$lib/_styles';

export interface LoaderPropsExtended extends Partial<SVGElement> {
	size: number;
	color: SvelteuiColor;
}
