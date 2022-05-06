import type { DefaultProps } from '$lib/styles';

export interface BoxProps extends DefaultProps<HTMLElement> {
	root: keyof HTMLElementTagNameMap;
}
