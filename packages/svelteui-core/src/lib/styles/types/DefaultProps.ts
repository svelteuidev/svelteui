import type { Override } from './SvelteUITheme';
import type { ActionArray } from '$lib/internal/utils/forwarding/forward-actions';

export interface DefaultProps<T = HTMLElement> {
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	className?: string;
	/** Used for custom theming the component */
	override?: Override['props'];
	/** Used for components to bind to elements */
	element?: T;
	/** Used for forwarding actions from component */
	use?: ActionArray;
}

/* Default Props to be used everywhere. Here in the same spot to copy

/** Used for forwarding actions from component 
export let use: $$BLANK-Props['use'] = [];

/** Used for components to bind to elements 
export let element: $$BLANK-Props['element'] = undefined;

/** Used for custom classes to be applied to the text e.g. Tailwind classes 
export let className: $$BLANK-Props['className'] = '';
export { className as class };

/** Css prop for custom theming the component 
export let override: $$BLANK-Props['override'] = {};

/** An action that forwards inner dom node events from parent component 
const forwardEvents = createEventForwarder(get_current_component());

*/
