export interface useFocusReturnResult {
	handleFocusReturn: (opened: boolean, shouldReturnFocus?: boolean) => void;
	returnFocus: () => void;
}

/** Return utilities for focus last active element, useful for Modal and Drawer */
export function useFocusReturn(): useFocusReturnResult {
	let lastActiveElement: HTMLElement | undefined;
	const returnFocus = () => {
		if (
			lastActiveElement &&
			'focus' in lastActiveElement &&
			typeof lastActiveElement.focus === 'function'
		) {
			lastActiveElement?.focus({ preventScroll: true });
		}
	};

	return {
		handleFocusReturn(opened, shouldReturnFocus = true) {
			if (opened) {
				lastActiveElement = document.activeElement as HTMLElement;
			} else if (shouldReturnFocus) {
				returnFocus();
			}
		},
		returnFocus
	};
}
