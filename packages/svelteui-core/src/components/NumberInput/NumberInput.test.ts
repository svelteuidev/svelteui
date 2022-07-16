import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as NumberInput } from './NumberInput.svelte';

describe('NumberInput', () => {
	itSupportsClassName(NumberInput);
});
