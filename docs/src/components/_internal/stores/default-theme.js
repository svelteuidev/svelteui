import { writable } from 'svelte/store';
import { DEFAULT_THEME } from '../../_styles/default-theme';
export const theme = writable(DEFAULT_THEME);
