import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * Width can only be modified when block prop is true
 *
 * ## Code 2:
 * If using the copy prop, a message must be associated with it
 *
 * ## Code 3:
 * If using the copy prop, the block prop must be set as well
 */
export const CodeErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: 'Width can only be modified when block prop is true',
		solution: `
        If your component looks like this:

        &lt;Code width={50} ...&gt; Code Text &lt;/Code&gt;
               ^^^^^^^^^^ - Try adding the block prop 
        `
	},
	{
		error: true,
		message: 'If using the copy prop, a message must be associated with it',
		solution: `
        <strong>If your component looks like this:</strong>
    
        &lt;Code copy block ...&gt; Code Text &lt;/Code&gt;
               ^^^^^^^^^^ - Try adding the message prop
        `
	},
	{
		error: true,
		message: 'If using the copy prop, the block prop must be set as well',
		solution: `
        <strong>If your component looks like this:</strong>

        &lt;Code copy ...&gt; Code Text &lt;/Code&gt;
               ^^^^ - Try adding the block prop
        `
	}
]);
