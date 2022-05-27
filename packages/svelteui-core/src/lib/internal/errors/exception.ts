import { UserException } from './user-exception.js';
import type { ErrorCtx, CurrentComponents } from './types';

export function exception(component: CurrentComponents, code: ErrorCtx): string {
	const { message, solution } = code;

	if (solution) {
		return UserException(component, message, solution);
	}
	return UserException(component, message);
}
