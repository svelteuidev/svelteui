import type { Action, UnknownKeyString } from '../types/_types';

/**
 *
 * @param node HTMLElement that the action is applied to
 * @param props A reactive object with properties that should be treated as css custom properties.
 * @example <div use:cssvariable={cssVariables}>
 */
export function cssvariable(
	node: HTMLElement,
	props: UnknownKeyString<string>
): ReturnType<Action> {
	Object.entries(props).forEach(([key, value]) => {
		node.style.setProperty(`--${key}`, `${value}`);
	});

	return {
		update(_props) {
			Object.entries(_props).forEach(([key, value]) => {
				node.style.setProperty(`--${key}`, `${value}`);
				delete props[key];
			});

			Object.keys(props).forEach((name) => node.style.removeProperty(`--${name}`));
		}
	};
}
