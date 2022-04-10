export type SvelteuiFontSizes =
	| 'Thin'
	| 'ExtraLight'
	| 'Light'
	| 'Normal'
	| 'Medium'
	| 'SemiBold'
	| 'Bold'
	| 'ExtraBold';

export type SvelteuiNumberFontSize = SvelteuiFontSizes | number;

export type SvelteuiTextAlignment = 'left' | 'right' | 'center' | 'justify';

export type SvelteuiTextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';
