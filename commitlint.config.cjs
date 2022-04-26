module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-min-length': [2, 'always', 1],
		'type-enum': [2, 'always', ['docs', 'repo', 'cli', 'core', 'actions', 'motion', 'utilities']]
	}
};
