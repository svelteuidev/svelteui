declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onuseclipboard?: (event: CustomEvent<string>) => void;
		'onuseclipboard-error'?: (event: CustomEvent<string>) => void;
	}
}
