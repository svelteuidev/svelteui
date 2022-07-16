import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * No Errors right now
 *
 */
export const GroupErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message:
			'If using the grow prop, the children prop must be associated with it. The children prop lets the component know how many children there are at runtime. This allows styles to be added properly',
		solution: `
                If your component looks like this:
                
                &lt;Group grow&gt; Button Text &lt;/Group&gt;
                       ^^^^ - Try adding the children prop
                `
	}
]);
