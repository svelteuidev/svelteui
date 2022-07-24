import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as AppShell } from './AppShell.svelte';

describe('AppShell', () => {
	itSupportsClassName(AppShell);
});
