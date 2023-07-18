import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Mark } from './Mark.svelte';

describe('Mark', () => {
	itSupportsClassName(Mark);
});
