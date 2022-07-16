import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Header } from './Header.svelte';

describe('Header', () => {
	itSupportsClassName(Header);
});
