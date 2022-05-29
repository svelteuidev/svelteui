import type { TransitionConfig } from 'svelte/transition';
import type { config } from '../../stitches.config';
import type * as Stitches from '@stitches/core';

export type CSS = Stitches.CSS<typeof config>;

export type LoaderType = 'bars' | 'circle' | 'dots';

export type VariantThemeFunction = Record<string, Record<string, string | Record<string, unknown>>>;

export type Transition<> = (node: Element, params: Record<string, unknown>) => TransitionConfig;

export interface Override {
	props: CSS;
}

export interface HeadingStyle {
	fontSize: number | string | undefined;
	lineHeight: number | string | undefined;
}
