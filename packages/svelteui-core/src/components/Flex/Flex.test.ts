import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Flex } from './Flex.svelte';

describe('Flex', () => {
	itSupportsClassName(Flex);
});
