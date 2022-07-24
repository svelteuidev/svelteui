import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as TextInput } from './TextInput.svelte';

describe('TextInput', () => {
	itSupportsClassName(TextInput);
});
