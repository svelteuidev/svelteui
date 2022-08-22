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
} from './_configurable.js';
export * from './is/index.js';
export * from './time/index.js';
export * from './random-id/index.js';
