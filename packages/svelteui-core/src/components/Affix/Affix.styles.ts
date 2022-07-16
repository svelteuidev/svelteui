import type { DefaultProps } from '$lib/styles';

export interface AffixProps extends DefaultProps {
	target: HTMLElement | string;
	zIndex?: number;
	position?: {
		top?: string | number;
		left?: string | number;
		bottom?: string | number;
		right?: string | number;
	};
}
