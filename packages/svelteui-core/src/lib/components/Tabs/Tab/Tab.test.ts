import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Tab } from './Tab.svelte';

describe('Tab', () => {
	itSupportsClassName(Tab);
});
