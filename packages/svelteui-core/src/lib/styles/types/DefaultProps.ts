import type { Override } from './SvelteUITheme';
import type { ActionArray } from '../../internal/utils/forward-actions';

export interface DefaultProps<T = string> {
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	className?: string;
	/** Used for custom theming the component */
	override?: Override['props'];
	/** Used for components to bind to elements */
	element?: T;
	/** Used for forwarding actions from component */
	use: ActionArray;
}
