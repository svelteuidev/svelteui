import { searchForKeys, searchForValues } from './utils.ts';
import type { DeepSearchOptions, Obj } from './types';

const defaultOpts: DeepSearchOptions = {
	searchFor: 'keys'
};

export function useDeepSearch<T extends Obj = Obj>(object: T, opts = defaultOpts) {
	const mergedOpts = { ...defaultOpts, ...opts };
	const { searchFor }: DeepSearchOptions = mergedOpts;

	if (searchFor === 'keys') {
		return searchForKeys(object);
	}
}

const deep = { name: 'Kamell', hobbies: { coding: true, running: false, nest: { nested: true } } };

const keys = useDeepSearch(deep, { searchFor: 'keys' });

// console.log(keys);
