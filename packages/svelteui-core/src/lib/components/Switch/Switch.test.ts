import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Switch } from './Switch.svelte';

describe('Switch', () => {
	itSupportsClassName(Switch);
});
