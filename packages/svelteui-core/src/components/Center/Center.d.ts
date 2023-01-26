import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export interface CenterProps extends DefaultProps<HTMLButtonElement>, HTMLAttributes<HTMLElement> {
	inline?: boolean;
}
