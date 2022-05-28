import type { DefaultProps, SvelteUIShadow, SvelteUINumberSize } from '$lib/styles';

export interface PaperProps extends DefaultProps {
	shadow?: SvelteUIShadow;
	radius?: SvelteUINumberSize;
	withBorder?: boolean;
}
