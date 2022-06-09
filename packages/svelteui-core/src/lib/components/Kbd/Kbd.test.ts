import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Kbd } from './Kbd.svelte';

describe('Kbd', () => {
	itSupportsClassName(Kbd);
});
