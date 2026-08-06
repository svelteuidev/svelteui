import type { Snippet } from 'svelte';
import type { ImageFit } from '../Image';
import type { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';
import type { HTMLImgAttributes } from 'svelte/elements';

export interface BackgroundImageProps extends DefaultProps<HTMLDivElement>, HTMLImgAttributes {
	src?: string;
	overridePlaceholder?: Override['props'];
	radius?: SvelteUINumberSize;
	fit?: ImageFit;
	width?: string | number;
	height?: string | number;
	caption?: string;
	usePlaceholder?: boolean;
	loader?: boolean;
	children?: Snippet;
	[key: string]: any;
}
