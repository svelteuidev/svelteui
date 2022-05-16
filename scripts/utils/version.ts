export function calculateVersion(type: string, version: string): string {
    const versionParts = version.split("-");
    let newVersion = versionParts[0].split(".").map(p => parseInt(p));
    let nextPart = versionParts[1] ? versionParts[1].split('.') : [];

    switch (type) {
        case "major":
            newVersion = [newVersion[0] + 1, 0, 0];
            return newVersion.join(".");
        case "minor":
            newVersion = [newVersion[0], newVersion[1] + 1, 0];
            return newVersion.join(".");
        case "patch":
            newVersion = [newVersion[0], newVersion[1], newVersion[2] +1];
            return newVersion.join(".");
        case "next":
            nextPart = nextPart.length === 0
                ? ["next", "1"]
                : ["next", String(parseInt(nextPart[1]) + 1)];
            return [newVersion.join("."), nextPart.join(".")].join("-");
        default:
            throw "Please provide one of these values: 'major', 'minor', 'patch' or 'next'"
    }
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
