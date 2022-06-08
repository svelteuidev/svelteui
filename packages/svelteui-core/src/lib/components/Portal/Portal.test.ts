import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Portal } from './Portal.svelte';

describe('Portal', () => {
	itSupportsClassName(Portal);
});
