import { SvelteComponentTyped } from 'svelte';
import { HTMLImgAttributes } from 'svelte/elements';
import { DefaultProps, Override, SvelteUINumberSize } from '$lib/styles';

export type ImageFit = 'cover' | 'contain' | undefined;

export interface ImageProps extends DefaultProps<HTMLImageElement>, HTMLImgAttributes {
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
  placeholder: { slotValue: string };
}

export default class Image extends SvelteComponentTyped<ImageProps, ImageEvents, ImageSlots> {}
