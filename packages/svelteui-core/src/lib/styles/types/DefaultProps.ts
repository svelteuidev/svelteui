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

export let use: $$BLANK-Props['use'] = [],
		element: $$BLANK-Props['element'] = undefined,
		className: $$BLANK-Props['className'] = '',
		override: $$BLANK-Props['override'] = {},

*/
