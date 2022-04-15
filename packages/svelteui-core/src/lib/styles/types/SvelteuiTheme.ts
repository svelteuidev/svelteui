import type { CSS } from '@stitches/core';

export type LoaderType = 'bars' | 'circle' | 'dots';

export interface Override {
	props: CSS;
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}
