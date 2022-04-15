import type { SidebarConfig } from '@svelteness/kit-docs';

export const sidebar: Readonly<SidebarConfig> = {
	baseUrl: '/docs',
	links: {
		'getting-started': ['first-page', 'second-page'],
		'second-category': ['first', 'second']
	}
};
