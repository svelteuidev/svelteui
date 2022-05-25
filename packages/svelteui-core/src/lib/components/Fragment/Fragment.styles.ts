import type { DefaultProps } from '$lib/styles';
import type { Fn } from '$lib/internal';

export interface FragmentProps extends DefaultProps<HTMLElement> {
	mode: 'fragment' | 'lifecycle';
	context: Record<string, unknown>;
	onCreate: Fn<unknown, unknown>;
	onMount: Fn<unknown, unknown>;
	beforeUpdate: Fn<unknown, unknown>;
	afterUpdate: Fn<unknown, unknown>;
	onDestroy: Fn<unknown, unknown>;
}
