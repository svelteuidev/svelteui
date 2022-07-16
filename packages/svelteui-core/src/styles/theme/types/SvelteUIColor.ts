import type { LiteralUnion } from '$lib/internal';

export type SvelteUIColor = LiteralUnion<
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
