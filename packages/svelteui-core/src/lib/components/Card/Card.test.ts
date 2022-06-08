import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Card } from './Card.svelte';

describe('Card', () => {
	itSupportsClassName(Card);
});
