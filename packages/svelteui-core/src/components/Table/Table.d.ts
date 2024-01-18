import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps, SvelteUINumberSize } from '$lib/styles';

export interface TableProps<T = HTMLTableElement>
	extends DefaultProps<T>,
		HTMLAttributes<HTMLElement> {
	striped?: boolean;
	highlightOnHover?: boolean;
	cellPadding?: SvelteUINumberSize;
	textAlign?: 'center' | 'right' | 'left';
	withRowBorder?: boolean;
	withColumnBorder?: boolean;
	withTableBorder?: boolean;
}
