import type { SvelteuiNumberSize, SvelteuiColor, SvelteuiTheme } from '$lib/_styles';

export const LOADER_SIZES = {
	xs: 18,
	sm: 22,
	md: 36,
	lg: 44,
	xl: 58
};

export interface LoaderPropsExtended extends Partial<SVGElement> {
	/** Defines width of loader */
	size?: SvelteuiNumberSize;

	/** Loader color from theme */
	color?: SvelteuiColor | SvelteuiTheme['white'];

	/** Loader appearance */
	variant?: SvelteuiTheme['loader'];
}

export const getCorrectShade = (color: SvelteuiColor | string) => {
	let _color: string;
	switch (color) {
		case 'blue':
			_color = '#228be6';
			return _color;
		case 'cyan':
			_color = '#15aabf';
			return _color;
		case 'dark':
			_color = '#25262b';
			return _color;
		case 'grape':
			_color = '#be4bdb';
			return _color;
		case 'gray':
			_color = '#868e96';
			return _color;
		case 'green':
			_color = '#40c057';
			return _color;
		case 'indigo':
			_color = '#4c6ef5';
			return _color;
		case 'lime':
			_color = '#82c91e';
			return _color;
		case 'orange':
			_color = '#fd7e14';
			return _color;
		case 'pink':
			_color = '#e64980';
			return _color;
		case 'red':
			_color = '#fa5252';
			return _color;
		case 'teal':
			_color = '#12b886';
			return _color;
		case 'violet':
			_color = '#7950f2';
			return _color;
		case 'yellow':
			_color = '#fab005';
			return _color;
		default:
			break;
	}
};
