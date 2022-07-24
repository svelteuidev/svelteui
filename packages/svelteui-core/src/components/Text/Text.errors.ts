import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component Text
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient
 *
 * ## Code 2:
 * If using the 'link' variant, an href needs to be set and the root must be an anchor
 */
export const TextErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
		solution: `
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `
	},
	{
		error: true,
		message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
		solution: `
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `
	}
]);
