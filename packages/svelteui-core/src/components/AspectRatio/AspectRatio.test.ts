import { describe } from 'vitest';
import { itSupportsClassName } from '@svelteuidev/tests';

import { default as AspectRatio } from './AspectRatio.svelte';
import type { AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
	ratio: 16 / 9
};

describe('AspectRatio', () => {
	itSupportsClassName(AspectRatio, defaultProps);
});
