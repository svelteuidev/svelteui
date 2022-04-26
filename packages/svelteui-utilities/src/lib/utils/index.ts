import type {
	ConfigurableDocument,
	ConfigurableLocation,
	ConfigurableNavigator,
	ConfigurableWindow
} from './_configurable';

export type {
	ConfigurableDocument,
	ConfigurableLocation,
	ConfigurableNavigator,
	ConfigurableWindow
};
export {
	defaultWindow,
	defaultNavigator,
	defaultLocation,
	defaultDocument,
	browser
} from './_configurable';
export { randomID } from './random-id/random-id.js';
export * from './is/is.js';
export * from './time/time.js';
