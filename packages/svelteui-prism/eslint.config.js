import svelteuiConfig from '../../configuration/eslint-preset-svelteui/index.js';
import ts from 'typescript-eslint';

// Ignores the svelte compilation error created by the usage of the data-manual in Prism.svelte
export default ts.config(svelteuiConfig, { rules: { 'svelte/valid-compile': 'off' } });
