/**
 * Temporary fix for using floating-ui dependency (for component Popper) with
 * the Rollup configuration of svelte-docs.
 */

const rollupConfig = await Deno.readTextFile('./node_modules/@svelte-docs/core/rollup.config.js');

// ignore this prepare step if the replace import
// is already in the Rollup config, which means
// this was already executed
const alreadyPrepared = rollupConfig.search(/import replace from/);
if (alreadyPrepared !== -1) {
    Deno.exit();
};

// inject the replace import and the replace config
// into the Rollup configuration
let updatedConfig = `import replace from '@rollup/plugin-replace';\n` + rollupConfig;
const injectPoint = updatedConfig.search(/commonjs\(\)/);
const injectText = `replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
`;
updatedConfig = updatedConfig.slice(0, injectPoint + 12) + injectText + updatedConfig.slice(injectPoint + 12);

await Deno.writeTextFile('./node_modules/@svelte-docs/core/rollup.config.js', "");
await Deno.writeTextFile('./node_modules/@svelte-docs/core/rollup.config.js', updatedConfig);
