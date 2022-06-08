import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Box } from './Box.svelte';

describe('Box', () => {
	itSupportsClassName(Box);
});
