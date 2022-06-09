import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as BackgroundImage } from './BackgroundImage.svelte';

describe('BackgroundImage', () => {
	itSupportsClassName(BackgroundImage);
});
