import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Burger } from './Burger.svelte';

describe('Burger', () => {
	itSupportsClassName(Burger);
});
