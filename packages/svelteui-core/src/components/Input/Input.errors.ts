import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component Text
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * No errors yet
 */
export const TextErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: 'Message',
		solution: `
                If your component looks like this:

                &lt;Input placeholder='placeholder' /&gt;
						  ^^^ - Try adding prop variant='gradient'
                `
	}
]);
