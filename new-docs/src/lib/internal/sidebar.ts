import { LINKS } from './links';
import type { SidebarConfig } from '@svelteness/kit-docs';

export const sidebar: Readonly<SidebarConfig> = {
	baseUrl: '/docs',
	links: {
		'getting-started': ['setup', 'contributing'],
		changelog: [...LINKS.changelog],
		theming: [...LINKS.theming],
		actions: [...LINKS.actions],
		core: [...LINKS.core],
		utilities: [...LINKS.utilities],
		motion: [...LINKS.motion]
	}
};
