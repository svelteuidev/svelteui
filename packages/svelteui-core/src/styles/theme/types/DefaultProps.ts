import type { SvelteUIStyleSystemProps } from './SvelteUIStyleSystem';
import type { Override } from './SvelteUITheme';
import type { ActionArray } from '$lib/internal/utils/forwarding/forward-actions';

export interface DefaultProps<T = HTMLElement> extends SvelteUIStyleSystemProps {
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	className?: string;
	/** Used for custom theming the component */
	override?: Override['props'];
	/** Used for components to bind to elements */
	element?: T;
	/** Used for forwarding actions from component */
	use?: ActionArray;
}
