import type { config } from '../index';
import type * as Stitches from '@stitches/core';

export type CSS = Stitches.CSS<typeof config>;

export type LoaderType = 'bars' | 'circle' | 'dots';

export interface Override {
	props: CSS;
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}
