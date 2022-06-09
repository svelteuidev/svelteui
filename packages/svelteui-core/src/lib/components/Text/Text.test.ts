import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Text } from './Text.svelte';

describe('Text', () => {
	itSupportsClassName(Text);
});
