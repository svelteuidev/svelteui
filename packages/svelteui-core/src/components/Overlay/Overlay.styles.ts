import type { DefaultProps, SvelteUINumberSize, CSS } from '$lib/styles';

export interface OverlayProps extends DefaultProps {
	blur?: number;
	gradient?: string;
	center?: boolean;
	opacity?: CSS['opacity'];
	color?: CSS['backgroundColor'];
	zIndex?: CSS['zIndex'];
	radius?: SvelteUINumberSize;
}

const elevations = {
	app: 100,
	modal: 200,
	popover: 300,
	overlay: 400
} as const;

export function getDefaultZIndex(level: keyof typeof elevations) {
	return elevations[level];
}
