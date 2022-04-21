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
 * 
 * ## Code 3:
 * If using the href prop the 'variant' needs to be set and the 'root' must be an anchor
 */
export const TextErrors: readonly ErrorCtx[] = Object.freeze([
	{
		error: true,
		message: "If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",
		solution: `
                If your component looks like this:

                <\\Text gradient={{from: 'blue', to: 'red', deg: 45}}>Text string <\\/Text>
                                                                    ^^^ - Try adding prop variant='gradient'
                `
	},
	{
		error: true,
<<<<<<< HEAD
<<<<<<< HEAD
		message: "If using the 'link' variant, an href needs to be set and the root must be an anchor",
=======
		message:
			"If using the 'link' variant, an 'href' needs to be set and the 'root' must be an anchor",
>>>>>>> f3ecc58 ([core]: ran repo:prepush)
=======
		message: "If using the 'link' variant, an 'href' needs to be set and the 'root' must be an anchor",
>>>>>>> ff4d4b4 ([@svelteui/core]: patched some components, added errors, & svelte util)
		solution: `
                If your component looks like this:

                <\\Text variant='link' >Text string <\\/Text>
                                    ^^^ - Try adding props href && root={'a'}'
                `
<<<<<<< HEAD
<<<<<<< HEAD
=======
	},
	{
		error: true,
		message:
			"If using the href prop the 'variant' needs to be set and the 'root' must be an anchor",
=======
	},
	{
		error: true,
		message: "If using the href prop the 'variant' needs to be set and the 'root' must be an anchor",
>>>>>>> ff4d4b4 ([@svelteui/core]: patched some components, added errors, & svelte util)
		solution: `
                If your component looks like this:

                <\\Text variant='link' >Text string <\\/Text>
                                    ^^^ - Try adding props href && root={'a'}'
                `
<<<<<<< HEAD
>>>>>>> f3ecc58 ([core]: ran repo:prepush)
	}
=======
	},
>>>>>>> ff4d4b4 ([@svelteui/core]: patched some components, added errors, & svelte util)
]);
