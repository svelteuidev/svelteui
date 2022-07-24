import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Space } from './Space.svelte';

describe('Space', () => {
	itSupportsClassName(Space);
});
