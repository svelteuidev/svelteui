import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as RadioGroup } from './RadioGroup.svelte';

describe('RadioGroup', () => {
	itSupportsClassName(RadioGroup);
});
