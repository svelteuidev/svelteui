import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Popper } from './Popper.svelte';

describe('Popper', () => {
	itSupportsClassName(Popper, { mounted: true });
});
