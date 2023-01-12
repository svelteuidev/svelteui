import type { LoaderProps } from '$lib/components/Loader/Loader';
import type { SvelteUIColor, SvelteUITheme } from '../../index';

export interface LoaderProps {
	size?: LoaderProps['size'] | number;
	color?: SvelteUIColor | SvelteUITheme['white'];
	variant?: LoaderProps['variant'];
}
