/**
 * Attaches the provided array of Svelte Actions to the target element, handling
 * lifecycle events automatically
 *
 * @param node
 * @param options
 * @returns
 */
export const forward_actions = (node, options) => {
	const handles = initialize_actions(options.actions);
	function initialize_actions(actions = []) {
		return actions.map((entry, index) => {
			if (Array.isArray(entry)) return entry[0](node, entry[1]);
			else return entry(node, undefined);
		});
	}
	return {
		destroy() {
			for (const handle of handles) {
				if (handle) {
					const { destroy } = handle;
					if (destroy) destroy();
				}
			}
		},
		update(options) {
			const { actions = [] } = options;
			if (actions.length !== handles.length) {
				throw new ReferenceError(
					`bad argument #0 to 'forward_actions.update' (supplied actions must never change lengths)`
				);
			}
			for (const index in actions) {
				const entry = actions[index];
				const options = Array.isArray(entry) ? entry[1] : undefined;
				const handle = handles[index];
				if (handle) {
					const { update } = handle;
					if (update) update(options);
				}
			}
		}
	};
};
