import { mdsvex } from 'mdsvex';
import examples from 'mdsvexamples';
import slug from 'rehype-slug';

const mdConfig = mdsvex({
	extensions: ['.svelte', '.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [examples],
	rehypePlugins: [slug]
});

export default mdConfig;
