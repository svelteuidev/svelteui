import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If using the disabled prop, a loading cannot be set at the same time
 *
 * ## Code 2:
 * If using the external prop, a href prop must be associated with it
 */
export const ButtonErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: 'If using the disabled prop, a loading cannot be set at the same time',
		solution: `
                If your component looks like this:
                
                <\\Button disabled loading ...> Button Text <\\/Button>
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `
	},
	{
		error: true,
		message: 'If using the external prop, a href prop must be associated with it',
		solution: `
                If your component looks like this:
                
                <\\Button external ...> Button Text <\\/Button>
                         ^^^^^^^^ - Try adding the href prop too
                `
	}
]);
