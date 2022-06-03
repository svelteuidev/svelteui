import { writable } from 'svelte/store';
import type { Action, Writable } from '../../shared/utilities/types';

// prettier-ignore

export interface UseFocusWithinOptions {
	onFocus?(event: FocusEvent): void;
	onBlur?(event: FocusEvent): void;
}

export interface FocusWithin {
	focused: Writable<boolean>;
	focuswithin: Action;
}

function containsRelatedTarget(event: FocusEvent) {
	if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
		return event.currentTarget.contains(event.relatedTarget);
	}
	return false;
}

export function useFocusWithin({ onBlur, onFocus }: UseFocusWithinOptions = {}): FocusWithin {
	const focused = writable(false);
	let focusedRef = false;

	const setFocused = (value: boolean) => {
		focused.set(value);
		focusedRef = value;
	};

	const handleFocusIn = (event: FocusEvent) => {
		if (!focusedRef) {
			setFocused(true);
			onFocus?.(event);
		}
	};

	const handleFocusOut = (event: FocusEvent) => {
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
