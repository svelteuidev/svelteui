import { writable } from 'svelte/store';

export interface UseFocusWithinOptions {
	onFocus?(event: FocusEvent): void;
	onBlur?(event: FocusEvent): void;
}

function containsRelatedTarget(event: FocusEvent) {
	if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
		return event.currentTarget.contains(event.relatedTarget);
	}
	return false;
}

export function focusWithin({ onBlur, onFocus }: UseFocusWithinOptions = {}) {
	const focused = writable(false);
	let focusedRef = false;

	const setFocused = (value: boolean) => {
		focused.set(value);
		focusedRef = value;
	};

	const handleFocusIn = (event: FocusEvent) => {
		console.log('focus in fired');
		if (!focusedRef) {
			setFocused(true);
			onFocus?.(event);
		}
	};

	const handleFocusOut = (event: FocusEvent) => {
		console.log('focus out fired');
		if (focusedRef && !containsRelatedTarget(event)) {
			setFocused(false);
			onBlur?.(event);
		}
	};

	return {
		focused,
		focuswithin: (node: HTMLElement) => {
			node?.addEventListener('focusin', handleFocusIn);
			node?.addEventListener('focusout', handleFocusOut);

			return {
				destroy: () => {
					node?.removeEventListener('focusin', handleFocusIn);
					node?.removeEventListener('focusout', handleFocusOut);
				}
			};
		}
	};
}
