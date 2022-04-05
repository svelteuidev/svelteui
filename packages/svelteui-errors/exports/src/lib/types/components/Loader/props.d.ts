import type { LoaderPropsExtended } from '@svelteuidev/core/src/lib/Loader/Loader.styles';
import type { SvelteuiColor, SvelteuiTheme } from '../../index';

export interface LoaderProps {
	[x: string]: any;
	size?: LoaderPropsExtended['size'] | number;
	color?: SvelteuiColor | SvelteuiTheme['white'];
	variant?: LoaderPropsExtended['variant'];
}
