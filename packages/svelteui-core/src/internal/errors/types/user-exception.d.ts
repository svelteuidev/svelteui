import type { CurrentComponents } from './CurrentComponents';

/**
 * The UserException function is used to help consumers of the library better navigate through potential errors.
 *
 *
 * It **does not** throw any errors because crashing the user's application is undesirable
 *
 * @param component the component the error is bound to
 * @param message the error message for the consumer
 * @param solution the potential solution for the consumer
 */
export declare function UserException(
	component: CurrentComponents,
	message: string,
	solution?: string
): string;
