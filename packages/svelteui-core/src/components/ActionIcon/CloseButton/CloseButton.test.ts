import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as CloseButton } from './CloseButton.svelte';

describe('CloseButton', () => {
	itSupportsClassName(CloseButton);
});
