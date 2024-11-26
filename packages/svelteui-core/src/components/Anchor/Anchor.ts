import type { DefaultProps } from '$lib/styles';
import type { Snippet } from 'svelte';
import type { TextProps } from '../Text/Text';

export type AnchorVariant = 'filled' | 'outline' | 'light';

export interface AnchorProps extends DefaultProps<HTMLAnchorElement>, TextProps<HTMLAnchorElement> {
	root?: TextProps['root'];
	external?: boolean;
	children: Snippet;
	[key: string]: any;
}
