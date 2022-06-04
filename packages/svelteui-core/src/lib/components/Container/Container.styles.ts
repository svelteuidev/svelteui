import { createStyles } from '$lib/styles';
import type { DefaultProps, SvelteUINumberSize, SvelteUISize } from '$lib/styles';

export interface ContainerProps extends DefaultProps {
	size?: SvelteUINumberSize;
	fluid?: boolean;
	sizes?: Record<SvelteUISize, number>;
}

interface ContainerStyleParams {
	fluid: boolean;
	size: SvelteUINumberSize;
	sizes?: Record<SvelteUISize, number>;
}

export default createStyles((theme, { fluid, size, sizes }: ContainerStyleParams) => {
	return {
		root: {
			paddingLeft: theme.fn.size({ size, sizes: theme.space }),
			paddingRight: theme.fn.size({ size, sizes: theme.space }),
			maxWidth: fluid ? '100%' : typeof size === 'number' ? `${size}px` : sizes[size] ?? sizes.md,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	};
});
