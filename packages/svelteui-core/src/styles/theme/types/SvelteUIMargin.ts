import type { SvelteUINumberSize } from './SvelteUISize';

export type SvelteUIMargin = 'm' | 'my' | 'mx' | 'mt' | 'mb' | 'ml' | 'mr';
type MarginValue = SvelteUINumberSize | (string & Record<string, never>);

export interface SvelteUIMargins {
	m?: MarginValue;
	my?: MarginValue;
	mx?: MarginValue;
	mt?: MarginValue;
	mb?: MarginValue;
	ml?: MarginValue;
	mr?: MarginValue;
}
