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
export * from './is';
export * from './time';
export * from './random-id';
