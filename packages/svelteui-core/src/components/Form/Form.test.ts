import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Form } from './Form.svelte';

describe('Form', () => {
	itSupportsClassName(Form);
});
