/**
 * Declaration of custom events for native DOM elements, used in some of the actions.
 *
 * @see https://github.com/sveltejs/language-tools/issues/431
 * @see https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
 * @see https://github.com/sveltejs/language-tools/issues/1352
 */
declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		'onmove:start'?: (
			event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }
		) => any;
		onmove?: (event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }) => any;
		'onmove:stop'?: (
			event: CustomEvent<{ x: number; y: number }> & { target: EventTarget & T }
		) => any;
	}
}
