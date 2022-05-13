import type { DefaultProps, SvelteUISize } from '@svelteuidev/core';

export interface PrismStyles extends DefaultProps {
	size: SvelteUISize;
	code: string;
	language: string;
	lineNumbers: boolean;
	highlightLines: string;
	normalizeWhiteSpace: boolean;
	normalizeWhiteSpaceConfig: Record<string, any>;
	copy: boolean;
	copyTimeout: number;
}
