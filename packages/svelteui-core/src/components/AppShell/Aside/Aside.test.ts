import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Aside } from './Aside.svelte';

describe('Aside', () => {
	itSupportsClassName(Aside);
});
