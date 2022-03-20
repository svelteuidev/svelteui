import type { SvelteuiNumberSize } from './SvelteuiSize';

export type SvelteuiMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';
type MarginValue = SvelteuiNumberSize | (string & Record<string, never>);

export interface SvelteuiMargins {
	m?: MarginValue;
	my?: MarginValue;
	mx?: MarginValue;
	mt?: MarginValue;
	mb?: MarginValue;
	ml?: MarginValue;
	mr?: MarginValue;
}
