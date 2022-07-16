import type { DefaultProps } from '$lib/styles';
import type { Fn } from '$lib/internal';

export interface FragmentProps extends DefaultProps<HTMLElement> {
	mode: 'fragment' | 'lifecycle';
	context: Record<string, unknown>;
}
