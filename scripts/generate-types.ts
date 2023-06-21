import { ensureDir, ensureFile, expandGlob, move } from 'https://deno.land/std@0.95.0/fs/mod.ts';
import { resolve } from 'https://deno.land/std@0.137.0/path/mod.ts';

const packagePath = resolve('./package');
const typesPath = `${packagePath}/types`;

await ensureDir(typesPath);

for await (const file of expandGlob('./package/**/*.d.ts')) {
	if (file.isDirectory) continue;

	// subtract the file path with the package path
	// to get the sub directory path to copy to in
	// the types directory
	const subDir = file.path.replace(packagePath, '');

	// ensures that the directory tree for the file
	// exists before copying the file
	await ensureFile(`${typesPath}${subDir}`);
	await move(file.path, `${typesPath}${subDir}`, { overwrite: true });
}
