import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Code } from './Code.svelte';

describe('Code', () => {
	itSupportsClassName(Code);
});
