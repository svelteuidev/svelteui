import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * No Errors right now
 *
 */
export const StackErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: 'Message',
		solution: `
                If your component looks like this:
                
                <\\Stack> Button Text <\\/Stack>
                        ^^^^^^^^ - Try removing this
                `
	}
]);
