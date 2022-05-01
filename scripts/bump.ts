import { expandGlob } from "https://deno.land/std@0.95.0/fs/mod.ts";

import { calculateVersion, updateVersions } from "./utils/version.ts";

type SEMVER = "major" | "minor" | "patch";
const DIRS: string[] = [".", "./docs", "./packages/*/"];

if (Deno.args.length !== 1) {
    throw "Please provide only one argument, the type of version bump ('major', 'minor' or 'patch')"
}

const type = Deno.args[0] as SEMVER;

for (const dir of DIRS) {
    for await (const file of expandGlob(`${dir}/package.json`)) {
        const packageJSON = JSON.parse(await Deno.readTextFile(file.path));

        console.log(file, packageJSON.name, packageJSON.version);
        
        const version = calculateVersion(type, packageJSON.version);
        updateVersions(version, packageJSON);

        await Deno.writeTextFile(
            file.path,
            JSON.stringify(packageJSON, null, "\t")
        );
    }
}
