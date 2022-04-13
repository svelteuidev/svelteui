export type SvelteuiFontSizes =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold';

export type SvelteuiNumberFontSize = SvelteuiFontSizes | number;

export type SvelteuiTextAlignment = 'left' | 'right' | 'center' | 'justify';

export type SvelteuiTextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
