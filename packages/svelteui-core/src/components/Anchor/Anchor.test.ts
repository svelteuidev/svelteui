import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Anchor } from './Anchor.svelte';

describe('Anchor', () => {
	itSupportsClassName(Anchor);
});
