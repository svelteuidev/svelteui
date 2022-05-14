import { StarFilled, BlendingMode, GithubLogo } from 'radix-icons-svelte';

export const NEXT_STEPS_DATA = [
	{
		icon: StarFilled,
		link: 'basics',
		title: 'Learn the basics',
		description:
			'Please begin your journey with SvelteUI by reading a 3-minute tutorial to get an overview of the core features.',
		color: '$green600'
	},
	{
		icon: BlendingMode,
		link: 'theming/svelteui-provider',
		title: 'Learn about theming',
		description:
			'Learn about theming concepts in SvelteUI such as configuring colors, fonts, shadows, spacing, and other theme values with SvelteUIProvider',
		color: '$cyan600'
	},
	{
		icon: GithubLogo,
		link: 'https://svelteui.org',
		title: 'Explore source code',
		description: 'If you like SvelteUI please give us a star',
		color: '#000'
	}
];
