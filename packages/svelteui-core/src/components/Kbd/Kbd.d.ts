import { HTMLAttributes } from 'svelte/elements';
import { DefaultProps } from '$lib/styles-old';

export type KbdPosition = 'right' | 'center' | 'left' | 'apart';

export interface KbdProps extends DefaultProps, HTMLAttributes<HTMLElement> {}
