import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as InputWrapper } from './InputWrapper.svelte';

describe('InputWrapper', () => {
	itSupportsClassName(InputWrapper);
});
