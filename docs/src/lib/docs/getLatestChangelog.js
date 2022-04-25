import manifest from '../../manifests/manifest.json';

const length = manifest.routes[1].routes.length;
export const latestChangelog = manifest.routes[1].routes[length - 1].path;
