import type { SvelteuiNumberSize } from './SvelteuiSize';
export declare type SvelteuiMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';
declare type MarginValue = SvelteuiNumberSize | (string & {});
export interface SvelteuiMargins {
    m?: MarginValue;
    my?: MarginValue;
    mx?: MarginValue;
    mt?: MarginValue;
    mb?: MarginValue;
    ml?: MarginValue;
    mr?: MarginValue;
}
export {};
