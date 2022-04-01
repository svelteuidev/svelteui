import type { Action } from '../types/_types';

/**
 * With the `use-click-outside` action, a callback function will be fired whenever the user clicks outside of the dom node the action is applied to.
 *
 * ```tsx
 * <script>
 *     import { clickoutside } from '@svelteuidev/actions'
 *
 *     let open = true;
 * </script>
 *
 * <div use:clickoutside={{ enabled: open, callback: () => open = false }}>
 *
 *     <Button on:click={() => open = true}>Open Modal</Button>
 *
 *     {#if open}
 *         <div>
 *             This is a modal
 *         </div>
 *     {:else if !open}
 *         <div>
 *             There is no modal
 *         </div>
 *    {/if}
 * </div>
 * ```
 * @param params - Object that contains two properties {enabled: boolean, callback: (any) => unknown}
 * @see https://svelteui-docs.vercel.app/docs/actions/use-click-outside
 */
export function clickoutside(
	node: HTMLElement,
	params: { enabled: boolean; callback: (any) => unknown }
): ReturnType<Action> {
	const { enabled: initialEnabled, callback } = params;

	const handleOutsideClick = ({ target }: MouseEvent) => {
		if (!node.contains(target as Node)) callback(node); // typescript hack, not sure how to solve without asserting as Node
	};

	function update({ enabled }: { enabled: boolean }) {
		if (enabled) {
			window.addEventListener('click', handleOutsideClick);
		} else {
			window.removeEventListener('click', handleOutsideClick);
		}
	}
	update({ enabled: initialEnabled });
	return {
		update,
		destroy() {
			window.removeEventListener('click', handleOutsideClick);
		}
	};
}
