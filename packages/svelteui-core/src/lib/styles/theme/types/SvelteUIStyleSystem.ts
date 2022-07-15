import type { LiteralUnion } from '$lib/internal';
import type { SvelteUINumberSize } from './SvelteUISize';

type SvelteUIStyleSystemValue = LiteralUnion<SvelteUINumberSize, string>;

export interface SvelteUIStyleSystemProps {
	m?: SvelteUIStyleSystemValue;
	my?: SvelteUIStyleSystemValue;
	mx?: SvelteUIStyleSystemValue;
	mt?: SvelteUIStyleSystemValue;
	mb?: SvelteUIStyleSystemValue;
	ml?: SvelteUIStyleSystemValue;
	mr?: SvelteUIStyleSystemValue;

	p?: SvelteUIStyleSystemValue;
	py?: SvelteUIStyleSystemValue;
	px?: SvelteUIStyleSystemValue;
	pt?: SvelteUIStyleSystemValue;
	pb?: SvelteUIStyleSystemValue;
	pl?: SvelteUIStyleSystemValue;
	pr?: SvelteUIStyleSystemValue;
}

export type SvelteUIStyleSystemSize = keyof SvelteUIStyleSystemProps;
