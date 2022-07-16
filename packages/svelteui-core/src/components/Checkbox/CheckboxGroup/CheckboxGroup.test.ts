import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as CheckboxGroup } from './CheckboxGroup.svelte';

describe('CheckboxGroup', () => {
	itSupportsClassName(CheckboxGroup);
});
