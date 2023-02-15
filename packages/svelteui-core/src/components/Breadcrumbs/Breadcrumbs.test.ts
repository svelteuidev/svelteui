import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Breadcrumbs } from './Breadcrumbs.svelte';

describe('Breadcrumbs', () => {
	itSupportsClassName(Breadcrumbs, { mounted: true });
});
