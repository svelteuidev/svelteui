import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as ChipGroup } from './ChipGroup.svelte';

describe('ChipGroup', () => {
	itSupportsClassName(ChipGroup);
});
