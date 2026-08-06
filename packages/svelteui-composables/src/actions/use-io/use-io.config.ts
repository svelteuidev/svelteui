/** This file is taken from maciekgrzybek/svelte-inview */

export type Event = 'iochange' | 'ioleave' | 'ioenter' | 'ioinit';

export type Options = {
	root?: HTMLElement | null;
	rootMargin?: string;
	threshold?: number | number[];
	unobserveOnEnter?: boolean;
};

export type Position = {
	x?: number;
	y?: number;
};

// Types below needs to be manually copied to additional-svelte.jsx.d.ts file - more details there
type Direction = 'up' | 'down' | 'left' | 'right';

export type ScrollDirection = {
	vertical?: Direction;
	horizontal?: Direction;
};

export type ObserverEventDetails = {
	inView: boolean;
	entry: IntersectionObserverEntry;
	scrollDirection: ScrollDirection;
	node: HTMLElement;
	observer: IntersectionObserver;
};

export type LifecycleEventDetails = {
	node: HTMLElement;
	observer: IntersectionObserver;
};
