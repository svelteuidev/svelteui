import { SvelteComponentTyped } from 'svelte';
import { ImageProps, ImageEvents, ImageSlots } from '../Image';

export interface BackgroundImageProps extends ImageProps<HTMLDivElement> {}
export interface BackgroundImageEvents extends ImageEvents {}
export interface BackgroundImageSlots extends ImageSlots {}

export default class BackgroundImage extends SvelteComponentTyped<
	BackgroundImageProps,
	BackgroundImageEvents,
	BackgroundImageSlots
> {}
