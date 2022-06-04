import type { DefaultProps } from '$lib/styles';

export interface PortalProps extends DefaultProps<HTMLDivElement> {
	target?: HTMLElement | string;
	position?: string;
	zIndex?: number;
}

export interface OptionalPortalProps extends PortalProps {
	withinPortal?: boolean;
}
