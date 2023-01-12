import { SvelteComponentTyped } from 'svelte';
import { IoConfig } from '@svelteuidev/composables';
import { Override, SvelteUINumberSize, SvelteUISize } from '$lib/styles';
import { TextInputProps } from '../TextInput/TextInput';

export type Formatter = (value: string | undefined) => string;
export type Parser = (value: string | undefined) => string | undefined;

export interface ObserverRenderProps extends Omit<TextInputProps, 'value'> {
	options?: IoConfig.Options;
}

export interface ObserverRenderEvents {
	init: CustomEvent<{ observer: IntersectionObserver; node: HTMLElement }>;
	change: CustomEvent<IoConfig.ObserverEventDetails>;
	enter: CustomEvent<IoConfig.ObserverEventDetails>;
	leave: CustomEvent<IoConfig.ObserverEventDetails>;
}

export interface ObserverRenderSlots {
	default: {
		visible: boolean;
		entry: IntersectionObserverEntry;
		scrollDirection: IoConfig.ScrollDirection;
		node: HTMLElement;
		observer: IntersectionObserver;
	};
}

export default class ObserverRender extends SvelteComponentTyped<
	ObserverRenderProps,
	ObserverRenderEvents,
	ObserverRenderSlots
> {}
