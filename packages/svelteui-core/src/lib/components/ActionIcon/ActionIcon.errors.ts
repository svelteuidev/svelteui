import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component Text
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If using the 'href' prop, set 'root' prop to an anchor ('a') tag
 *
 */
export const ActionIconErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: "If using the 'href' prop, set 'root' prop to an anchor ('a') tag",
		solution: `
                If your component looks like this:

                |1. <\\ActionIcon href='https://example.com' >
                |                                          ^^^ - Try adding prop root='a'
                |2.        Text string 
                |3. <\\/ActionIcon>
                `
	}
]);
