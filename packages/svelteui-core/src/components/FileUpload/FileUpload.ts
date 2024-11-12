import { HTMLAttributes } from 'svelte/elements';
import { Component, DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';

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
	icon?: Component | HTMLOrSVGElement;
	fileIcon?: Component | HTMLOrSVGElement;
	removeIcon?: Component | HTMLOrSVGElement;
	reset?: boolean;
	resetLabel?: string;
	resetColor?: SvelteUIColor;
	resetIcon?: Component | HTMLOrSVGElement;
	preview?: boolean;
}

export interface FileUploadEvents {
	selected?: CustomEvent<FileItem[]>;
	removed?: CustomEvent<{ file: File; index: number }>;
	reset?: CustomEvent;
	[evt: string]: CustomEvent<any>;
}
