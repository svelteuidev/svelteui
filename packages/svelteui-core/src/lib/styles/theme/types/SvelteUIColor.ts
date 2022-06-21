import type { LiteralUnion } from '$lib/internal';

export type SvelteUIColor =
	| 'dark'
	| 'gray'
	| 'red'
	| 'pink'
	| 'grape'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange';

export type SvelteUIOrAnyColor = LiteralUnion<
	| 'dark'
	| 'gray'
	| 'red'
	| 'pink'
	| 'grape'
	| 'violet'
	| 'indigo'
	| 'blue'
	| 'cyan'
	| 'teal'
	| 'green'
	| 'lime'
	| 'yellow'
	| 'orange',
	string
>;
