module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-min-length': [2, 'always', 1],
		'type-enum': [
			2,
			'always',
			[
				'docs',
				'core',
				'cli',
				'svelteui/core',
				'svelteui/actions',
				'svelteui/motion',
				'svelteui/utilities'
			]
		]
	}
};
