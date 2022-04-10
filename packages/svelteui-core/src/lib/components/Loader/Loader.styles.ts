import { theme } from '$lib/styles';
import type { SvelteuiNumberSize, SvelteuiColor, LoaderType } from '$lib/styles';

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
	color?: SvelteuiColor | 'white';

	/** Loader appearance */
	variant?: LoaderType;
}

export const getCorrectShade = (color: SvelteuiColor | string, dark: boolean = false) => {
	return theme.colors[dark ? `${color}400` : `${color}600`].value;
};
