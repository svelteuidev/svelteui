import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const showSideBar: Writable<boolean> = writable(false);
