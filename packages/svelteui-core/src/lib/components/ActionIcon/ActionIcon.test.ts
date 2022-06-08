import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as ActionIcon } from './ActionIcon.svelte';

describe('ActionIcon', () => {
	itSupportsClassName(ActionIcon);
});
