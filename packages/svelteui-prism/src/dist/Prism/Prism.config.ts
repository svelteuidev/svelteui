import type { WhiteSpaceConfig } from './Prism.styles';

const config: WhiteSpaceConfig = {
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	'break-lines': 80,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 4,
	'spaces-to-tabs': 4
};

export { config };
