import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const activeTab: Writable<string> = writable('one');
