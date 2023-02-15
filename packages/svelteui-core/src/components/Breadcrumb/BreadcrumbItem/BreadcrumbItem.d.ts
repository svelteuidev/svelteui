import { HTMLAttributes } from 'svelte/elements'; 
import {  DefaultProps, SvelteUIColor, SvelteUINumberSize } from '$lib/styles';



export interface BreadcrumbItemProps extends DefaultProps<HTMLDivElement>, HTMLAttributes<HTMLElement> {
	value?: number;
	color?: SvelteUIColor;
	size?: SvelteUINumberSize;
	label?: string;
	active?: boolean; 
	href?: string; 
}
