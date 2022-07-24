import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Checkbox } from './Checkbox.svelte';

describe('Checkbox', () => {
	itSupportsClassName(Checkbox);
});
