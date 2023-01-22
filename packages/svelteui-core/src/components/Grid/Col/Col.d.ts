import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface ColProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	span?: number;
	offset?: number;
	offsetXs?: number;
	offsetSm?: number;
	offsetMd?: number;
	offsetLg?: number;
	offsetXl?: number;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}
