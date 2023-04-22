import ThemeDecorator from './ThemeDecorator.svelte';

export const decorators = [() => ({ Component: ThemeDecorator })];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	/* No viewport modifications yet
	viewport: {
		viewports: {
			mobile: {
				name: 'Mobile (SM)',
				type: 'mobile',
				styles: {
					width: `${APP_VIEWPORT.SM}px`,
					height: '100%'
				}
			},
			tablet: {
				name: 'Tablet (MD)',
				type: 'tablet',
				styles: {
					width: `${APP_VIEWPORT.MD}px`,
					height: '100%'
				}
			},
			laptop: {
				name: 'Laptop (LG)',
				type: 'laptop',
				styles: {
					width: `${APP_VIEWPORT.LG}px`,
					height: '100%'
				}
			},
			desktop: {
				name: 'Desktop (XL)',
				type: 'desktop',
				styles: {
					width: `${APP_VIEWPORT.XL}px`,
					height: '100%'
				}
			}
		},
		defaultViewport: 'desktop'
	}
	*/
};
