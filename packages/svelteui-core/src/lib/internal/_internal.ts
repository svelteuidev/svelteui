/** Internal Action functions to be used throughout the app */
import type { SvelteComponent } from 'svelte';
import { bubble, listen } from 'svelte/internal';

/**
 * @todo Implement the rest of the internal functions
 */

// "Borrowed" from Tropix126/fluent-svelte Adapted from rgossiaux/svelte-headlessui which is modified from hperrin/svelte-material-ui
/** Function for forwarding DOM events to the component's declaration */
export function createEventForwarder(component: SvelteComponent, exclude: string[] = []) {
	type EventCallback = (event: any) => void;

	// This is our pseudo $on function. It is defined on component mount.
	let $on: (eventType: string, callback: EventCallback) => () => void;

	// This is a list of events bound before mount.
	let events: [string, EventCallback][] = [];

	// Monkeypatch SvelteComponent.$on with our own forward-compatible version
	component.$on = (eventType: string, callback: EventCallback) => {
		let destructor = () => {};
		if (exclude.includes(eventType)) {
			// Bail out of the event forwarding and run the normal Svelte $on() code
			const callbacks =
				component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
			callbacks.push(callback);
			return () => {
				const index = callbacks.indexOf(callback);
				if (index !== -1) callbacks.splice(index, 1);
			};
		}
		if ($on) {
			destructor = $on(eventType, callback); // The event was bound programmatically.
		} else {
			events.push([eventType, callback]); // The event was bound before mount by Svelte.
		}
		return () => destructor();
	};

	return (node: HTMLElement | SVGElement) => {
		const destructors: (() => void)[] = [];
		const forwardDestructors: { [k: string]: () => void } = {};
		const forward = (e: Event) => bubble(component, e);

		// This function is responsible for listening and forwarding
		// all bound events.
		$on = (eventType, callback) => {
			let handler = callback;
			// DOM addEventListener options argument.
			let options: boolean | AddEventListenerOptions = false;

			// Listen for the event directly, with the given options.
			const off = listen(node, eventType, handler, options);
			const destructor = () => {
				off();
				const idx = destructors.indexOf(destructor);
				if (idx > -1) {
					destructors.splice(idx, 1);
				}
			};

			destructors.push(destructor);

			// Forward the event from Svelte.
			if (!(eventType in forwardDestructors)) {
				forwardDestructors[eventType] = listen(node, eventType, forward);
			}

			return destructor;
		};

		// Listen to all the events added before mount.
		for (const event of events) {
			$on(event[0], event[1]);
		}

		return {
			destroy: () => {
				// Remove all event listeners.
				for (const destructor of destructors) {
					destructor();
				}

				// Remove all event forwarders.
				for (let entry of Object.entries(forwardDestructors)) {
					entry[1]();
				}
			}
		};
	};
}
