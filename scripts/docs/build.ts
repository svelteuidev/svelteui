import { ensureDir } from 'https://deno.land/std@0.95.0/fs/mod.ts';
import { resolve } from 'https://deno.land/std@0.137.0/path/mod.ts';
import { fg } from 'https://deno.land/x/colorify@1.0.5/mod.ts';
import { properCode, bundleCodeNowrap, mainDeletion } from './strings-to-search-for.ts';

const pathToDocs = resolve('./docs');
const outputPath = `${pathToDocs}/__DOCS__/dist`;

fg.white('beginning the modification process');
/** make sure that the dist directory exists */
await ensureDir(outputPath);
/** make sure that the CNAME file exists if not create one */
try {
	Deno.writeTextFileSync(`${outputPath}/CNAME`, 'www.svelteui.org');
} catch (err) {
	console.error(err);
}

async function buildDocs() {
	let bundleCSS = await Deno.readTextFile(`${outputPath}/bundle.css`);

	bundleCSS = bundleCSS.replace(mainDeletion, ' ').replace(bundleCodeNowrap, properCode);

	await Deno.writeTextFile(`${outputPath}/bundle.css`, bundleCSS);
	fg.green('The modification was successful');
}

Promise.resolve(buildDocs());
