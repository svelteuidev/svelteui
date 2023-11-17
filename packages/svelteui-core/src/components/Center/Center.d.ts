import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles-old';

export interface CenterProps extends DefaultProps<HTMLButtonElement>, HTMLAttributes<HTMLElement> {
	inline?: boolean;
}
