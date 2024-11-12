import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles';

export type KbdPosition = 'right' | 'center' | 'left' | 'apart';

export interface KbdProps extends DefaultProps, HTMLAttributes<HTMLElement> {}
