import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Footer } from './Footer.svelte';

describe('Footer', () => {
	itSupportsClassName(Footer);
});
