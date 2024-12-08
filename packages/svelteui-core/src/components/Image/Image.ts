import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';
import type { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

export type ImageFit = 'cover' | 'contain' | undefined;

export interface ImageProps<T = HTMLImageElement> extends DefaultProps<T>, Omit<HTMLImgAttributes, 'placeholder'> {
	src?: string;
	overridePlaceholder?: Override['props'];
	radius?: SvelteUINumberSize;
	fit?: ImageFit;
	width?: string | number;
	height?: string | number;
	caption?: string;
	usePlaceholder?: boolean;
	loader?: boolean;
	placeholder?: Snippet;
	[key: string]: any
}
