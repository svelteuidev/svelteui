import type { DefaultProps } from '$lib/styles';

export interface PortalProps extends DefaultProps<HTMLDivElement> {
	target?: HTMLElement | string;
}

export interface OptionalPortalProps extends PortalProps {
	withinPortal?: boolean;
}
