import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Center } from './Center.svelte';

describe('Center', () => {
	itSupportsClassName(Center);
});
