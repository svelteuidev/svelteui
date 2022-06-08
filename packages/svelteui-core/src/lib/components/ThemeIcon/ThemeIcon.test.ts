import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as ThemeIcon } from './ThemeIcon.svelte';

describe('ThemeIcon', () => {
	itSupportsClassName(ThemeIcon);
});
