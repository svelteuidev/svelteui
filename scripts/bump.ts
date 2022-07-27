import { expandGlob } from "https://deno.land/std@0.95.0/fs/mod.ts";

import { calculateVersion, updateVersions } from "./utils/version.ts";

import packageJSON from '../package.json' assert {type: "json"};

type SEMVER = "major" | "minor" | "patch";

// the directories where the bump of its version and dependencies
// will be performed
const DIRS: string[] = [".", "./apps/*/", "./packages/*/"];

// the directories where the bump of the package version will
// be skipped and only its dependencies will be bumped
const VERSION_EXCEPTION: string[] = [""];

if (Deno.args.length !== 1) {
    throw "Please provide only one argument, the type of version bump ('major', 'minor', 'patch' or 'next')"
}

const type = Deno.args[0] as SEMVER;
const version = calculateVersion(type, packageJSON.version);

for (const dir of DIRS) {
    for await (const file of expandGlob(`${dir}/package.json`)) {
        const json = JSON.parse(await Deno.readTextFile(file.path));
        
        updateVersions(version, json, VERSION_EXCEPTION.includes(dir));

        await Deno.writeTextFile(
            file.path,
            JSON.stringify(json, null, "\t")
        );
    }
}
