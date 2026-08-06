import type { SVGAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize, LoaderType } from '$lib/styles';

export interface LoaderProps
	extends DefaultProps<SVGSVGElement>,
		Omit<SVGAttributes<SVGSVGElement>, 'className'> {
	size?: SvelteUINumberSize;
	color?: SvelteUIColor | 'white';
	variant?: LoaderType;
	[key: string]: any;
}
