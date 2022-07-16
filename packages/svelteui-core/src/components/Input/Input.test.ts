import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Input } from './Input.svelte';

describe('Input', () => {
	itSupportsClassName(Input, {}, true);
});
