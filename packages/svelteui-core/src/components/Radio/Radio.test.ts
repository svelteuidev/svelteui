import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Radio } from './Radio.svelte';

describe('Radio', () => {
	itSupportsClassName(Radio);
});
