import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Textarea } from './Textarea.svelte';

describe('Textarea', () => {
	itSupportsClassName(Textarea);
});
