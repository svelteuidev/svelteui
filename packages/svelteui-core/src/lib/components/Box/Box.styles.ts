import type { DefaultProps } from '$lib/styles';

export interface BoxProps extends DefaultProps {
	root: keyof HTMLElementTagNameMap;
}
