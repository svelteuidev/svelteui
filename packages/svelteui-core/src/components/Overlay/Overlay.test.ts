import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Overlay } from './Overlay.svelte';

describe('Overlay', () => {
	itSupportsClassName(Overlay);
});
