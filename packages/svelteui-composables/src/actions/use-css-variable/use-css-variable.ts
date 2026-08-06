import type { Action, ActionReturn } from 'svelte/action';
import type { UnknownKeyString } from '../../shared/actions/types';

/**
 * With the `use-css-variable` action, an object of properties will be treated as css custom variables. By defining this object inside of a $: {} reactive block, `use-css-variable` can update those css properties on the fly whenever some of its values change.
 *
 * ```tsx
 *   <script>
 *       import {cssvariable} from '@svelteuidev/composables'
 *
 *       let isRed = $state(true);
 *
 *       let styleVars = $derived({
 *           titleColor: isRed ? 'red' : 'blue',
 *       });
 *   </script>
 *
 *   <div use:cssvariable="{styleVars}">
 *       <!-- anything here will have access to var(--titleColor) -->
 *       <p>This text is normal</p>
 *       <p class='example'>This text is using the variable</p>
 *   </div>
 *   <Button onclick={() => isRed = !isRed}>Click to switch colors</Button>
 *
 *   <style>
 *       .example {
 *           color: var(--titleColor);
 *       }
 *   </style>
 * ```
 * @param props - A reactive object with properties that should be treated as css custom properties.
 * @see https://svelteui.dev/actions/use-css-variable
 */
export const cssvariable: Action<
	HTMLElement,
	UnknownKeyString<string>,
	ActionReturn<UnknownKeyString<string>>
> = (node: HTMLElement, props: UnknownKeyString<string>) => {
	Object.entries(props).forEach(([key, value]) => {
		node.style.setProperty(`--${key}`, `${value}`);
	});

	return {
		update(_props: UnknownKeyString<string>) {
			Object.entries(_props).forEach(([key, value]) => {
				node.style.setProperty(`--${key}`, `${value}`);
				delete props[key];
			});

			Object.keys(props).forEach((name) => node.style.removeProperty(`--${name}`));
			props = _props;
		}
	};
};
