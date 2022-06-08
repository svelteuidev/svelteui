import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Stack } from './Stack.svelte';

describe('Stack', () => {
	itSupportsClassName(Stack);
});
