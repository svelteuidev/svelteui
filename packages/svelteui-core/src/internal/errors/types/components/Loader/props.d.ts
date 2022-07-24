import type { LoaderPropsExtended } from '$lib/components/Loader/Loader.styles';
import type { SvelteUIColor, SvelteUITheme } from '../../index';

export interface LoaderProps {
	size?: LoaderPropsExtended['size'] | number;
	color?: SvelteUIColor | SvelteUITheme['white'];
	variant?: LoaderPropsExtended['variant'];
}
