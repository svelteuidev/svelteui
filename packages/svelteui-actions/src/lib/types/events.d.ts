declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onuseclipboard?: (event: CustomEvent<string>) => void;
		'onuseclipboard-error'?: (event: CustomEvent<string>) => void;
		onusedownload?: (event: CustomEvent<Blob>) => void;
		'onusedownload-error'?: (event: CustomEvent<Blob>) => void;
	}
}
