import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as TypographyProvider } from './TypographyProvider.svelte';

describe('TypographyProvider', () => {
	itSupportsClassName(TypographyProvider);
});
