import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Container } from './Container.svelte';

describe('Container', () => {
	itSupportsClassName(Container);
});
