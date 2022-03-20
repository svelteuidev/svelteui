import type { SvelteuiNumberSize, SvelteuiColor, SvelteuiTheme } from '../_styles';
export declare const LOADER_SIZES: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
export interface LoaderPropsExtended extends Partial<SVGElement> {
    /** Defines width of loader */
    size?: SvelteuiNumberSize;
    /** Loader color from theme */
    color?: SvelteuiColor | SvelteuiTheme['white'];
    /** Loader appearance */
    variant?: SvelteuiTheme['loader'];
}
