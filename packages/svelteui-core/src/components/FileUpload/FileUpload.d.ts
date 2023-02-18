import { HTMLAttributes } from 'svelte/elements';
import { ColorShades, DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';



export interface FileItem {
	name?: string;
	icon?: string;
	size?: number;
	file?: File

}


export interface FileUploadProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	accept?: string;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	type?: string = undefined | 'drag';
	multiple?: boolean;
	name?: string;
	files?: FileItem[];
	icon?: Component | HTMLOrSVGElement;
	preview?: boolean;
	resetLabel?: string;
	reset?: boolean;
	resetColor?: SvelteUIColor;
	disabled?: boolean;
	resetIcon?: Component | HTMLOrSVGElement;
}


export interface FileUploadEvents {
	selected?: CustomEvent<any>;
	removed?: CustomEvent<File, Number>;
	reset?: CustomEvent<>;
}
