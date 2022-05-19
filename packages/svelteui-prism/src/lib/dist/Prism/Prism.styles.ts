import type { DefaultProps, SvelteUISize } from '@svelteuidev/core';

export interface PrismStyles extends DefaultProps {
	size: SvelteUISize;
	code: string;
	language: string;
	lineNumbers: boolean;
	highlightLines: string;
	normalizeWhiteSpace: boolean;
	normalizeWhiteSpaceConfig: WhiteSpaceConfig;
	copy: boolean;
	copyTimeout: number;
}

export interface WhiteSpaceConfig {
	'remove-trailing': boolean;
	'remove-indent': boolean;
	'left-trim': boolean;
	'right-trim': boolean;
	'break-lines': number;
	'remove-initial-line-feed': boolean;
	'tabs-to-spaces': number;
	'spaces-to-tabs': number;
}
