import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ColorScheme } from '../types';

export const colorScheme: Writable<ColorScheme> = writable('light');
