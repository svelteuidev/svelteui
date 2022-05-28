import { expandGlob } from "https://deno.land/std@0.95.0/fs/mod.ts";

async function preparePackages() {
    for await (const file of expandGlob(`./packages/*/package.json`)) {
        const json = JSON.parse(await Deno.readTextFile(file.path));

        json.module = "index.js";

        await Deno.writeTextFile(
            file.path,
            JSON.stringify(json, null, "\t")
        );
    }
}

await preparePackages();