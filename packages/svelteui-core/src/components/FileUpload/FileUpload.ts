import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

import type { DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

export interface FileItem {
	name?: string;
	icon?: string;
	size?: number;
	file?: File;
}

export interface FileUploadProps<T = 'drag'>
	extends DefaultProps<HTMLDivElement>,
		HTMLAttributes<HTMLElement> {
	accept?: string;
	type?: T;
	name?: string;
	multiple?: boolean;
	files?: FileItem[];
	label?: string;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	disabled?: boolean;
	id?: string;
	reset?: boolean;
	resetLabel?: string;
	resetColor?: SvelteUIColor;
	preview?: boolean;
	onselected?: (files: FileItem[]) => void;
	onremoved?: (removed: { file: FileItem, index: number }) => void;
	onreset?: () => void;
	icon?: Snippet;
	fileIcon?: Snippet;
	resetIcon?: Snippet;
	removeIcon?: Snippet;
	children?: Snippet;
	[key: string]: any
}

export interface FileUploadEvents {
	selected?: CustomEvent<FileItem[]>;
	removed?: CustomEvent<{ file: File; index: number }>;
	reset?: CustomEvent;
	[evt: string]: CustomEvent<any>;
}
