import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Paper } from './Paper.svelte';

describe('Paper', () => {
	itSupportsClassName(Paper);
});
