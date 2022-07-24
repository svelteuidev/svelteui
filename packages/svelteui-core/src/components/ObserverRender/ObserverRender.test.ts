import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as ObserverRender } from './ObserverRender.svelte';

describe('ObserverRender', () => {
	itSupportsClassName(ObserverRender);
});
