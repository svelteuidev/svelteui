export type Action = (
	node: HTMLElement,
	parameters?: any
) => {
	update?: (parameters: any) => void;
	destroy?: () => void;
};

export interface UnknownKeyString<T> {
	[key: string]: T;
}
export interface UnknownKeyNumber<T> {
	[key: number]: T;
}

export type FocusableElement =
	| HTMLInputElement
	| HTMLSelectElement
	| HTMLTextAreaElement
	| HTMLAnchorElement
	| HTMLButtonElement
	| HTMLAreaElement;
