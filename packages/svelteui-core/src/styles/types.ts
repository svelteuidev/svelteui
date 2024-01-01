// Utils
type Primitive = null | undefined | string | number | boolean | symbol | bigint;

type LiteralUnion<LiteralType, BaseType extends Primitive> =
	| LiteralType
	| (BaseType & Record<never, never>);

// Colors
type SvelteUIColor = LiteralUnion<
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

type Scale = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

type ValidColor = `${SvelteUIColor}${Scale}`;

export type Color = ValidColor | 'primary' | 'white' | 'black';

// Sizes

type SvelteUISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SvelteUINumberSize = LiteralUnion<SvelteUISize, number>;

// Theme

export type Theme = {
	colors: Record<SvelteUIColor, string[]>;
	primary: string;
	white: string;
	sizes: Record<SvelteUISize, number>;
};

// System styles

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
