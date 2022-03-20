/* eslint-disable @typescript-eslint/no-unused-vars */

declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onuseclipboard?: (event: CustomEvent<string>) => void;
		'onuseclipboard-error'?: (event: CustomEvent<Error>) => void;
		onusedownload?: (event: CustomEvent<{ blob: Blob; filename: string }>) => void;
		'onusedownload-error'?: (event: CustomEvent<Error>) => void;
	}
}
