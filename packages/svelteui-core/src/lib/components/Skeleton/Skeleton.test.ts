import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Skeleton } from './Skeleton.svelte';

describe('Skeleton', () => {
	itSupportsClassName(Skeleton);
});
