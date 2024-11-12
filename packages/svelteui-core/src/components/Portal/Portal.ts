import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface PortalProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	target?: HTMLElement | string;
	position?: string;
	zIndex?: number;
}
