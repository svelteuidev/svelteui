import type { Obj } from './types';

export function getKeysFromObject<T extends Obj = Obj>(object: T) {
	return Object.keys(object);
}

export function searchForValues<T extends Obj = Obj>(obj: T) {
	// TODO
}

export function searchForKeys<T extends Obj = Obj>(obj: T): unknown {
	const nestedKeys = [];
	const keys = getKeysFromObject(obj);
	for (const key of keys) {
		const value = obj[key];
		if (typeof value === 'object') {
			// if we find a value is an object we must recursively search through it to find all the keys.
		}
	}

	return [...keys, ...nestedKeys];
}
