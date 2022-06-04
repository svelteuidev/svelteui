export type Action<T = any> = (
	node: HTMLElement,
	parameters?: T
) => {
	update?: (parameters: T) => any | void;
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

export type Fn<T> = () => T;
