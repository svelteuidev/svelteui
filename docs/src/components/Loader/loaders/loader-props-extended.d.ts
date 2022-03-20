import type { SvelteuiColor } from '../../_styles';
export interface LoaderPropsExtended extends Partial<SVGElement> {
    size: number;
    color: SvelteuiColor;
}
