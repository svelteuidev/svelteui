import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { ColorScheme } from './types';

/**
 * @todo
 * A way to subscribe to theme changes outside of component scope
 * Such as context in react
 * Current implementation is a store but is a work in progress
 */
export const colorScheme: Writable<ColorScheme> = writable('light');
