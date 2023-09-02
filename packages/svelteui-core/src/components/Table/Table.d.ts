import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface TableProps extends DefaultProps, HTMLAttributes<HTMLElement> {
	withBorder?: boolean;
	striped?: boolean;
	highlightOnHover?: boolean;
	cellPadding?: SvelteUINumberSize;
	textAlign?: 'center' | 'right' | 'left';
}
