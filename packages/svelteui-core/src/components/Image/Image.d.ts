import { HTMLImgAttributes } from 'svelte/elements';
import { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles-old';

export type ImageFit = 'cover' | 'contain' | undefined;

export interface ImageProps<T = HTMLImageElement> extends DefaultProps<T>, HTMLImgAttributes {
	src?: string;
	overridePlaceholder?: Override['props'];
	radius?: SvelteUINumberSize;
	fit?: ImageFit;
	width?: string | number;
	height?: string | number;
	caption?: string;
	usePlaceholder?: boolean;
	loader?: boolean;
}
