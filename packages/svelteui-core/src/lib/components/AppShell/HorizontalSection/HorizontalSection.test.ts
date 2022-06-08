import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as HorizontalSection } from './HorizontalSection.svelte';

describe('HorizontalSection', () => {
	itSupportsClassName(HorizontalSection, { section: 'navbar' });
});
