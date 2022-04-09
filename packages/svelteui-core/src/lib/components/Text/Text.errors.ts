import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component Text
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If using variant 'gradient', a 'gradient' prop is required
 */
export const TextErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message:
			"If using the variant 'gradient', it is also required the provide the prop 'gradient' like { from: 'color-from', to: 'color-to', deg: 'degree' }",
		solution: `
                If your component looks like this:

                <\\Text variant='gradient'>Text string <\\/Text>
                                        ^^^ - Try adding a 'gradient' prop
                `
	},
	{
		error: true,
		message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
		solution: `
                If your component looks like this:

                <\\Text gradient={{from: 'blue', to: 'red', deg: 45}}>Text string <\\/Text>
                                                                    ^^^ - Try adding prop variant='gradient'
                `
	}
]);
