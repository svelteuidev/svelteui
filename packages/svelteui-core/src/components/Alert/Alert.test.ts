import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as Alert } from './Alert.svelte';

describe('Alert', () => {
	itSupportsClassName(Alert);
});
