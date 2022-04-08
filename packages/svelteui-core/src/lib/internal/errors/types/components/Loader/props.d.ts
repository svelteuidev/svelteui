import type { LoaderPropsExtended } from '$lib/components/Loader/Loader.styles';
import type { SvelteuiColor, SvelteuiTheme } from '../../index';

export interface LoaderProps {
	size?: LoaderPropsExtended['size'] | number;
	color?: SvelteuiColor | SvelteuiTheme['white'];
	variant?: LoaderPropsExtended['variant'];
}
