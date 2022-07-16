import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Tabs } from './Tabs.svelte';

describe('Tabs', () => {
	itSupportsClassName(Tabs);
});
