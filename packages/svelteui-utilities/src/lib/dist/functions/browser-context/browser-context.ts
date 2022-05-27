import { writable } from 'svelte/store';
import { onMount } from 'svelte';
import { browser, defaultWindow } from '../../utils/index.js';
import type { Writable } from '../../types';

export interface BrowserContextState {
	trigger: string;
	state?: any;
	length?: number;
	hash?: string;
	host?: string;
	hostname?: string;
	href?: string;
	origin?: string;
	pathname?: string;
	port?: string;
	protocol?: string;
	search?: string;
}

const listenerOptions = {
	passive: true
};

export function browserContext(): Writable<BrowserContextState> {
	let window: Window;
	if (browser) window = defaultWindow;

	const setState = (trigger: string): BrowserContextState => {
		const { state, length } = window?.history ?? {};
		const { hash, host, hostname, href, origin, pathname, port, protocol, search } =
			window?.location ?? {};

		return {
			trigger,
			state,
			length,
			hash,
			host,
			hostname,
			href,
			origin,
			pathname,
			port,
			protocol,
			search
		};
	};

	const state: Writable<BrowserContextState> = writable(setState('load'));

	onMount(() => {
		window.addEventListener('popstate', () => state.set(setState('popstate')), listenerOptions);
		window.addEventListener('hashchange', () => state.set(setState('hashchange')), listenerOptions);

		return () => {
			window.removeEventListener('popstate', () => state.set(setState('popstate')));
			window.removeEventListener('hashchange', () => state.set(setState('hashchange')));
		};
	});
	return state;
}
