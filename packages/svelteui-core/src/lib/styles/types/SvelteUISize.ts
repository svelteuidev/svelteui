import type { LiteralUnion } from '$lib/internal';

export type SvelteUISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvelteUINumberSize = LiteralUnion<SvelteUISize, number>;
export type SvelteUISizes = Record<SvelteUISize, number>;
