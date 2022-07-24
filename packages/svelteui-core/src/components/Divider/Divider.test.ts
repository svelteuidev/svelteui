import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Divider } from './Divider.svelte';

describe('Divider', () => {
	itSupportsClassName(Divider);
});
