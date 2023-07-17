import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Blockquote } from './Blockquote.svelte';

describe('Blockquote', () => {
	itSupportsClassName(Blockquote);
});
