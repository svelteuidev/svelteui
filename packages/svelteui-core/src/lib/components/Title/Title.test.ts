import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Title } from './Title.svelte';

describe('Title', () => {
	itSupportsClassName(Title);
});
