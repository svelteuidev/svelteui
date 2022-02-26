import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import { DEFAULT_THEME } from '$lib/_styles/default-theme';
import type { SvelteuiThemeBase } from '$lib/_styles';

export const theme: Writable<SvelteuiThemeBase> = writable(DEFAULT_THEME);
