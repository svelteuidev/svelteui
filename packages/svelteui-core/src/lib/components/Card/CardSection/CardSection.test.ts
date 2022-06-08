import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as CardSection } from './CardSection.svelte';

describe('CardSection', () => {
	itSupportsClassName(CardSection);
});
