import type { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface CardSectionProps extends DefaultProps {
	padding?: SvelteUINumberSize;
	first?: boolean;
	last?: boolean;
}
