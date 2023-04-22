module.exports = {
	typePrefix: '[',
	typeSuffix: ']',
	types: [
		{ value: 'feat', name: 'feat: A new feature' },
		{ value: 'fix', name: 'fix: A bug fix' },
		{ value: 'docs', name: 'docs: Changes to the documentation' },
		{
			value: 'style',
			name: 'style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
		},
		{
			value: 'refactor',
			name: 'refactor: A code change that neither fixes a bug nor adds a feature',
		},
		{
			value: 'perf',
			name: 'perf: A code change that improves performance',
		},
		{ value: 'test', name: 'test: Adding missing tests' },
		{
			value: 'chore',
			name: 'chore: Changes to the build process or auxiliary tools and libraries such as documentation generation',
		},
		{ value: 'revert', name: 'revert: Revert to a commit' },
		{ value: 'WIP', name: 'WIP: Work in progress' },
	],
	scopes: [
		{
			value: 'core',
			name: 'core: A change made in repository tooling (not a package)'
		},
		{ value: 'docs', name: 'docs: A change made in the documentation' },
		{ value: '@svelteui/core', name: '@svelteui/core: A change made in core package' },
		{
			value: '@svelteui/composables',
			name: '@svelteui/composables: A change made in composables package'
		},
		{ value: '@svelteui/motion', name: '@svelteui/motion: A change made in motion package' },
		{ value: '@svelteui/prism', name: '@svelteui/prism: A change made in prism package' },
		{ value: '@svelteui/demos', name: '@svelteui/demos: A change made in demos package' },
		{ value: '@svelteui/dates', name: '@svelteui/dates: A change made in dates package' },
		{
			value: '@svelteui/preprocessors',
			name: '@svelteui/preprocessors: A change made in preprocessors package'
		},
		{ value: '@svelteui/tests', name: '@svelteui/tests: A change made in testing package' }
	],

	allowCustomScopes: false,
	allowTicketNumber: false,
	isTicketNumberRequired: false,
	// ticketNumberPrefix: 'TICKET-',
	// ticketNumberRegExp: '\\d{1,5}',

	// override the messages, defaults are as follows
	messages: {
		type: "Select the type of change that you're committing:",
		scope: 'Denote the scope of this change:',
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?'
	},

	allowCustomScopes: false,
	allowBreakingChanges: ['feat', 'fix'],
	// skip any questions you want
	// skipQuestions: ['body', 'breaking', 'footer', 'scope'],

	// limit subject length
	subjectLimit: 100
	// breaklineChar: '|', // It is supported for fields body and footer.
	// footerPrefix : 'ISSUES CLOSED:'
	// askForBreakingChangeFirst : true, // default is false
};
