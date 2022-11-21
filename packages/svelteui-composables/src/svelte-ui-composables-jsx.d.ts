/**
 * Declaration of custom events for native DOM elements, used in some of the actions.
 * 
 * @see https://github.com/sveltejs/language-tools/issues/431
 * @see https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
 */
declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        onpanmove?: (event: CustomEvent<{ x: number, y: number }> & { target: EventTarget & T }) => any;
    }
}
