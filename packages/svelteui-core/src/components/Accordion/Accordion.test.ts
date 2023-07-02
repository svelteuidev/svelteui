import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { Accordion } from './index';

describe('Accordion', () => {
	itSupportsClassName(Accordion);
});
