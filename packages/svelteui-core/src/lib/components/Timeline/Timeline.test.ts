import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Timeline } from './Timeline.svelte';

describe('Timeline', () => {
	itSupportsClassName(Timeline);
});
