import { expandGlob } from 'https://deno.land/std@0.95.0/fs/mod.ts';

async function preparePackages() {
	for await (const file of expandGlob(`./packages/**/package.json`)) {
		const json = JSON.parse(await Deno.readTextFile(file.path));

		// change module of package.json to point to the index.js
		// that will be created with the 'package' command
		json.module = 'index.js';

		await Deno.writeTextFile(file.path, JSON.stringify(json, null, '\t'));
	}
}

async function prepareTSConfig() {
	for await (const file of expandGlob(`./packages/*/tsconfig.json`)) {
		const json = JSON.parse(await Deno.readTextFile(file.path));

		// remove all mentions of other packages inside tsconfig.json files
		for (const key of Object.keys(json.compilerOptions.paths)) {
			if (!key.startsWith('@svelteuidev')) continue;
			delete json.compilerOptions.paths[key];
		}
		json.references = [];

		await Deno.writeTextFile(file.path, JSON.stringify(json, null, '\t'));
	}
}

await Promise.all([preparePackages(), prepareTSConfig()]);
