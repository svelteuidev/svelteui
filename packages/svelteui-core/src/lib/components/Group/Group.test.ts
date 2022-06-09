import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Group } from './Group.svelte';

describe('Group', () => {
	itSupportsClassName(Group);
});
