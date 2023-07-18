import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as PasswordInput } from './PasswordInput.svelte';

describe('PasswordInput', () => {
	itSupportsClassName(PasswordInput);
});
