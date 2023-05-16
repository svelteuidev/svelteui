module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:svelte/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	overrides: [{
		files: ["*.svelte"],
		parser: "svelte-eslint-parser",
		parserOptions: {
			parser: "@typescript-eslint/parser",
		},
	}],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	rules: {
		'no-useless-escape': 'off',
		'no-extra-boolean-cast': 'off',
		"no-inner-declarations": 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-empty-interface': 'off'
	}
};
