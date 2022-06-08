import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as SimpleGrid } from './SimpleGrid.svelte';

describe('SimpleGrid', () => {
	itSupportsClassName(SimpleGrid);
});
