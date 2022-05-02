export function calculateVersion(type: string, version: string): string {
    let newVersion = version.split(".").map(p => parseInt(p));
    switch (type) {
        case "major":
            newVersion = [newVersion[0] + 1, 0, 0];
            break;
        case "minor":
            newVersion = [newVersion[0], newVersion[1] + 1, 0];
            break;
        case "patch":
            newVersion = [newVersion[0], newVersion[1], newVersion[2] +1];
            break;
        default:
            throw "Please provide one of these values: 'major', 'minor' or 'patch'"
    }
    return newVersion.join(".");
}

export function updateVersions(version: string, packageJSON: Record<string, any>, skipPackageBump: boolean): Record<string, any> {
    if (!skipPackageBump) packageJSON.version = version;

    for(const tree of ["dependencies", "peerDependencies"]) {
        if (!Object.keys(packageJSON).includes(tree)) continue;

        for (const dependency of Object.keys(packageJSON[tree])) {
            if (!dependency.startsWith("@svelteuidev")) continue;

            packageJSON[tree][dependency] = version;
        }
    }

    return packageJSON;
}
