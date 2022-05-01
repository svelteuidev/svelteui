import { latestChangelog } from './lib/docs/getLatestChangelog';

// List of projects/orgs using your project for the users page.
export const siteConfig = {
	editUrl: 'https://github.com/svelteuidev/svelteui/edit/master/docs/src/pages',
	copyright: `Copyright © ${new Date().getFullYear()} Kamell Perry. All Rights Reserved.`,
	repoUrl: 'https://github.com/svelteuidev/svelteui',
	changelogLatest: latestChangelog,
	algolia: {
		appId: '8NOICX8O43',
		apiKey: 'cd4a9d86e391e08aff19fc8b3baebce8',
		indexName: 'svelte' // algoliaOptions: {
		//   facetFilters: ['version:VERSION'],
		// },
	}
};
