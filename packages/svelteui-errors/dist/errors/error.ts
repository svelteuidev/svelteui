import { UserException } from '../index';
import type { ErrorCtx, CurrentComponents } from '../../types';

interface ErrorFunction {
	error: ErrorCtx['error'];
	template: string;
}

export function error(component: CurrentComponents, code: ErrorCtx): ErrorFunction {
	const { error, message, solution } = code;

	if (solution) {
		return {
			error,
			template: UserException(component, message, solution)
		};
	}
	return {
		error,
		template: UserException(component, message)
	};
}
