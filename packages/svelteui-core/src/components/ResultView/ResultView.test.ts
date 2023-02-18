import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as ResultView } from './ResultView.svelte';

describe('ResultView', () => {
	itSupportsClassName(ResultView, {});
});
