import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Image } from './Image.svelte';

describe('Image', () => {
	itSupportsClassName(Image);
});
