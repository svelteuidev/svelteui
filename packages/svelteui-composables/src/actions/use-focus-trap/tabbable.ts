const TABBABLE_NODES = /input|select|textarea|button|object/;
export const FOCUS_SELECTOR = 'a, input, select, textarea, button, object, [tabindex]';

function hidden(element: HTMLElement) {
	if (process.env.NODE_ENV === 'test') {
		return false;
	}

	return element.style.display === 'none';
}

function visible(element: HTMLElement) {
	const isHidden =
		element.getAttribute('aria-hidden') ||
		element.getAttribute('hidden') ||
		element.getAttribute('type') === 'hidden';

	if (isHidden) {
		return false;
	}

	let parentElement: HTMLElement = element;
	while (parentElement) {
		if (parentElement === document.body || parentElement.nodeType === 11) {
			break;
		}

		if (hidden(parentElement)) {
			return false;
		}

		parentElement = parentElement.parentNode as HTMLElement;
	}

	return true;
}

function getElementTabIndex(element: HTMLElement) {
	const tabIndex = element.getAttribute('tabindex');

	return tabIndex ? parseInt(tabIndex, 10) : null;
}

export function focusable(element: HTMLElement) {
	const nodeName = element.nodeName.toLowerCase();
	const isTabIndexNotNull = getElementTabIndex(element) !== null;
	const res =
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		(TABBABLE_NODES.test(nodeName) && !element.disabled) ||
		(element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNull : isTabIndexNotNull);

	return res && visible(element);
}

export function tabbable(element: HTMLElement) {
	const tabIndex = getElementTabIndex(element);
	const isTabIndexNull = tabIndex === null;
	return (isTabIndexNull || tabIndex >= 0) && focusable(element);
}

export function findTabbableDescendants(element: HTMLElement): HTMLElement[] {
	return Array.from(element.querySelectorAll<HTMLElement>(FOCUS_SELECTOR)).filter(tabbable);
}
