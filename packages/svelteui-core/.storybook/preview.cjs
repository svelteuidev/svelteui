// import { APP_VIEWPORT } from './constants';
// import { addDecorator } from '@storybook/svelte'

import ThemeDecorator from './ThemeDecorator.svelte';

export const decorators = [() => ThemeDecorator];

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		defaultValue: 'light',
		toolbar: {
			icon: 'circlehollow',
			// Array of plain string values or MenuItem shape (see below)
			items: ['light', 'dark'],
			// Property that specifies if the name of the item will be displayed
			showName: true,
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};

// addDecorator(storyFn => {
// 	const { Component, props, on, WrapperData } = storyFn();

// 	console.log(Component, ThemeDecorator);
// 	return {
// 		Component,
// 		props,
// 		on,
// 		Wrapper: ThemeDecorator,
// 		WrapperData
// 	}
// })

// export const parameters = {
// 	actions: { argTypesRegex: '^on[A-Z].*' },
// 	controls: {
// 		matchers: {
// 			color: /(background|color)$/i,
// 			date: /Date$/
// 		}
// 	},
// 	order: ['Components', 'Composables', 'Dates']
// 	/* No viewport modifications yet
// 	viewport: {
// 		viewports: {
// 			mobile: {
// 				name: 'Mobile (SM)',
// 				type: 'mobile',
// 				styles: {
// 					width: `${APP_VIEWPORT.SM}px`,
// 					height: '100%'
// 				}
// 			},
// 			tablet: {
// 				name: 'Tablet (MD)',
// 				type: 'tablet',
// 				styles: {
// 					width: `${APP_VIEWPORT.MD}px`,
// 					height: '100%'
// 				}
// 			},
// 			laptop: {
// 				name: 'Laptop (LG)',
// 				type: 'laptop',
// 				styles: {
// 					width: `${APP_VIEWPORT.LG}px`,
// 					height: '100%'
// 				}
// 			},
// 			desktop: {
// 				name: 'Desktop (XL)',
// 				type: 'desktop',
// 				styles: {
// 					width: `${APP_VIEWPORT.XL}px`,
// 					height: '100%'
// 				}
// 			}
// 		},
// 		defaultViewport: 'desktop'
// 	}
// 	*/
// };