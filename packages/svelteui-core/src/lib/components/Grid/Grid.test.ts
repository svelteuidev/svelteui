import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Grid } from './Grid.svelte';

describe('Grid', () => {
	itSupportsClassName(Grid);
});
