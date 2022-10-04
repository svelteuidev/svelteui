import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Chip } from './Chip.svelte';

describe('Chip', () => {
	itSupportsClassName(Chip);
});
