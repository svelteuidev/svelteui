import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Button } from './Button.svelte';

describe('Button', () => {
	itSupportsClassName(Button);
});
