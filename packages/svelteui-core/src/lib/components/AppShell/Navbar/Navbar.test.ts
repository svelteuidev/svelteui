import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Navbar } from './Navbar.svelte';

describe('Navbar', () => {
	itSupportsClassName(Navbar);
});
