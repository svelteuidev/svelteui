import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Tooltip } from './Tooltip.svelte';

describe('Tooltip', () => {
	itSupportsClassName(Tooltip);
});
