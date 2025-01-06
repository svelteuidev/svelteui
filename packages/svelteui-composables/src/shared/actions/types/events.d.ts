/* eslint-disable @typescript-eslint/no-unused-vars */

// Due to an ambivalent nature of .d.ts files, we can't import or export
// anything in this file. That is the cause we need to manually put ScrollDirection, ObserverEventDetails
// and LifecycleEventDetails types to ensure correct typings in the app.

type Direction = 'up' | 'down' | 'left' | 'right';

type ScrollDirection = {
	vertical?: Direction;
	horizontal?: Direction;
};

type ObserverEventDetails = {
	inView: boolean;
	entry: IntersectionObserverEntry;
	scrollDirection: ScrollDirection;
	node: HTMLElement;
	observer: IntersectionObserver;
};

type LifecycleEventDetails = {
	node: HTMLElement;
	observer: IntersectionObserver;
};

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		oniochange?: (event: CustomEvent<ObserverEventDetails>) => void;
		onioenter?: (event: CustomEvent<ObserverEventDetails>) => void;
		onioleave?: (event: CustomEvent<ObserverEventDetails>) => void;
		onioinit?: (event: CustomEvent<LifecycleEventDetails>) => void;
		onuseclipboard?: (event: CustomEvent<string>) => void;
		'onuseclipboard-error'?: (event: CustomEvent<Error>) => void;

		onusedownload?: (event: CustomEvent<{ blob: Blob; filename: string }>) => void;
		'onusedownload-error'?: (event: CustomEvent<Error>) => void;

		onuselongpress?: (event: CustomEvent<string>) => void;

		onuseidle?: (event: CustomEvent<string>) => void;
	}
}
