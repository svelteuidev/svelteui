import { SvelteComponentTyped } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';
import { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

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

export interface ImageEvents {
	load: Event;
	error: Event;
}

export interface ImageSlots {
	placeholder: Record<string, never>;
}

export default class Image extends SvelteComponentTyped<ImageProps, ImageEvents, ImageSlots> {}
