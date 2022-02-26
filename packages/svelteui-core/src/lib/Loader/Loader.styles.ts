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
