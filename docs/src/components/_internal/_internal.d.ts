/** Internal Action functions to be used throughout the app */
import type { SvelteComponent } from 'svelte';
/**
 * @todo Implement the rest of the internal functions
 */
/** Function for forwarding DOM events to the component's declaration */
export declare function createEventForwarder(component: SvelteComponent, exclude?: string[]): (node: HTMLElement | SVGElement) => {
    destroy: () => void;
};
