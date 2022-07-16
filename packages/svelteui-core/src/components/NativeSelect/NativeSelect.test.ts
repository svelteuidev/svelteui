import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as NativeSelect } from './NativeSelect.svelte';

describe('NativeSelect', () => {
	itSupportsClassName(NativeSelect);
});
