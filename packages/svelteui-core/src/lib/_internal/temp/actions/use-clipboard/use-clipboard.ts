export type Action = (
	node: HTMLElement,
	parameters?: unknown
) => {
	update?: (parameters: unknown) => void;
	destroy?: () => void;
};

export function clipboard(node: HTMLElement, text: string): ReturnType<Action> {
	const click = async () => {
		if (text)
			try {
				await navigator.clipboard.writeText(text);

				node.dispatchEvent(new CustomEvent('useclipboard', { detail: text }));
			} catch (e) {
				node.dispatchEvent(new CustomEvent('useclipboard-error', { detail: e }));
			}
	};

	node.addEventListener('click', click, true);

	return {
		update: (t: string) => (text = t),
		destroy: () => node.removeEventListener('click', click, true)
	};
}
