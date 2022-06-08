module.exports = {
	typePrefix: '[',
	typeSuffix: ']',
	types: [
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
		{ value: '@svelteui/tests', name: '@svelteui/tests: A change made in testing package' }
	],

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	ticketNumberPrefix: 'TICKET-',
	ticketNumberRegExp: '\\d{1,5}',

	// override the messages, defaults are as follows
	messages: {
		type: "Select the type of change that you're committing:",
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?'
	},

	allowCustomScopes: false,
	allowBreakingChanges: ['feat', 'fix'],
	// skip any questions you want
	skipQuestions: ['body', 'breaking', 'footer', 'scope'],

	// limit subject length
	subjectLimit: 100
	// breaklineChar: '|', // It is supported for fields body and footer.
	// footerPrefix : 'ISSUES CLOSED:'
	// askForBreakingChangeFirst : true, // default is false
};
