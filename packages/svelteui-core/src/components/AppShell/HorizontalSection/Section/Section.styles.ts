import type { Snippet } from 'svelte';
import type { DefaultProps } from '$lib/styles';

export interface SectionProps extends DefaultProps {
	grow: boolean;
	children?: Snippet
	[key: string]: any
}
