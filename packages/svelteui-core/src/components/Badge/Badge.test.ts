import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Badge } from './Badge.svelte';

describe('Badge', () => {
	itSupportsClassName(Badge);
});
