/**
 * Temporary fix for using floating-ui dependency (for component Popper) with
 * the Rollup configuration of svelte-docs, as well as fix for the monorepo
 * dependencies.
 */
const rollupConfig = await Deno.readTextFile('../../node_modules/@svelte-docs/core/rollup.config.js');

// build the path to point to the monorepo node_modules
const path = Deno.cwd();
const corePath = path.split("/apps/docs")[0];

// ignore this prepare step if the replace import
// is already in the Rollup config, which means
// this was already executed
const alreadyPrepared = rollupConfig.search(/import replace from/);
if (alreadyPrepared !== -1) {
    Deno.exit();
};

// inject the replace import and the variables with the correct paths
// so that later they can point to the monorepo node_modules and the
// node env can have the correct value
let updatedConfig = `import replace from '@rollup/plugin-replace';
const INDEX = '${corePath}/node_modules/@svelte-docs/core/main.js';
const EX_INDEX = '${corePath}/node_modules/@svelte-docs/core/examples.main.js';\n` + rollupConfig;
updatedConfig = updatedConfig.replace(/import \{INDEX,/, "import {");
updatedConfig = updatedConfig.replace(/,EX_INDEX,/, ",");
const injectPoint = updatedConfig.search(/commonjs\(\)/);
const injectText = `		replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
`;
updatedConfig = updatedConfig.slice(0, injectPoint + 12) + injectText + updatedConfig.slice(injectPoint + 12);

await Deno.writeTextFile('../../node_modules/@svelte-docs/core/rollup.config.js', "");
await Deno.writeTextFile('../../node_modules/@svelte-docs/core/rollup.config.js', updatedConfig);
