import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as UnstyledButton } from './UnstyledButton.svelte';

describe('UnstyledButton', () => {
	itSupportsClassName(UnstyledButton);
});
