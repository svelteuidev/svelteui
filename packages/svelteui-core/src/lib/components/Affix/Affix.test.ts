import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Affix } from './Affix.svelte';

describe('Affix', () => {
	itSupportsClassName(Affix, {}, true);
});
