import { copySync, ensureDirSync, ensureFileSync, expandGlobSync } from "https://deno.land/std@0.95.0/fs/mod.ts";
import { resolve } from "https://deno.land/std@0.137.0/path/mod.ts";

ensureDirSync(`./types`);

const packagePath = resolve("./package");
const typesPath = resolve("./types");

for (const file of expandGlobSync("./package/**/*.d.ts")) {
    if (file.isDirectory) continue;

    // subtract the file path with the package path
    // to get the sub directory path to copy to in
    // the types directory 
    const subDir = file.path.replace(packagePath, '');
    console.log(subDir, file.path);
    
    // ensures that the directory tree for the file
    // exists before copying the file
    ensureFileSync(`${typesPath}${subDir}`);
    copySync(file.path, `${typesPath}${subDir}`, { overwrite: true });
}
