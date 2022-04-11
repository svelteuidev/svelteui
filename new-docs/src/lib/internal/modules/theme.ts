import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const theme: Writable<'dark' | 'light'> = writable('light');
