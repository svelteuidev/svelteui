import type { ErrorCtx } from '$lib/internal/errors/types';

/** Error codes for component
 *
 * `Object.freeze` is needed to keep modification outside of the object unavailable
 *
 * ## Code 1:
 * If using label or slot label, it cannot use orientation 'vertical'
 */
export const DividerErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: "If using label or label slot, it cannot use orientation 'vertical'",
		solution: `
                If your component looks like this:
                
                &lt;Divider orientation='vertical' label='text...'&lt;/Divider&gt;
                                        ^^^^^^^^^ - Try changing orientation to 'horizontal'
                `
	}
]);
