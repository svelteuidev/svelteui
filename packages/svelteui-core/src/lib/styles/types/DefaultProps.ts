import type { Override } from './SvelteuiTheme';

export interface DefaultProps<T = string> {
	/** Used for custom classes to be applied to the button e.g. Tailwind classes */
	className?: string;
	/** Override prop for custom theming the component */
	override?: Override['props'];
	/** Property for components to bind to elements */
	element?: T;
}
