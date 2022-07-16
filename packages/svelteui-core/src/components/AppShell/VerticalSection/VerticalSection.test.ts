import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as VerticalSection } from './VerticalSection.svelte';

describe('VerticalSection', () => {
	itSupportsClassName(VerticalSection, { section: 'navbar' });
});
