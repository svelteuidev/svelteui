declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onuseclipboard?: (event: CustomEvent<string>) => void;
		'onuseclipboard-error'?: (event: CustomEvent<string>) => void;
		onusedownload?: (event: CustomEvent<{ blob: Blob, filename: string }>) => void;
		'onusedownload-error'?: (event: CustomEvent<{ blob: Blob, filename: string }>) => void;
	}
}
