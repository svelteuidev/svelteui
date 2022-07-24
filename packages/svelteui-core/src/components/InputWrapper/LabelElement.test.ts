import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as LabelElement } from './LabelElement.svelte';

describe('LabelElement', () => {
	itSupportsClassName(LabelElement);
});
