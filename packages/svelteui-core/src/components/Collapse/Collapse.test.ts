import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Collapse } from './Collapse.svelte';

describe('Collapse', () => {
	itSupportsClassName(Collapse);
});
