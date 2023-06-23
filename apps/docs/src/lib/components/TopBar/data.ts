import { GithubLogo } from 'radix-icons-svelte';
import { base } from '$app/paths';
import { default as DiscordLogo } from '../svgs/Discord.svelte';
import type { ActionIconVariant } from '@svelteuidev/core/dist';

const baseStyles = {};

const discordStyles = {
	...baseStyles,
	bc: '#6875f5 !important',
	transitionProperty: 'all',
	transitionDuration: '150ms',
	'&:hover': {
		bc: '#5850ec !important'
	}
};

export const searchLinks = [
	{ title: 'Introduction', link: `${base}/introduction`, section: 'Essentials' },
	{ title: 'Installation', link: `${base}/installation`, section: 'Essentials' },
	{ title: 'Learn the Basics', link: `${base}/basics`, section: 'Essentials' },
	{ title: 'Contributing', link: `${base}/contributing`, section: 'Essentials' },
	{ title: 'FAQ', link: `${base}/faq`, section: 'Essentials' },

	{ title: 'Version 0.5.0', link: `${base}/changelog/v0-5-0`, section: 'Changelog' },
	{ title: 'Version 0.5.5', link: `${base}/changelog/v0-5-5`, section: 'Changelog' },
	{ title: 'Version 0.6.0', link: `${base}/changelog/v0-6-0`, section: 'Changelog' },
	{ title: 'Version 0.6.5', link: `${base}/changelog/v0-6-5`, section: 'Changelog' },
	{ title: 'Version 0.7.0', link: `${base}/changelog/v0-7-0`, section: 'Changelog' },

	{ title: 'Customize Theme', link: `${base}/theming/create-styles`, section: 'Theming' },
	{ title: 'Dark Theme', link: `${base}/theming/dark-theme`, section: 'Theming' },
	{ title: 'Default Theme', link: `${base}/theming/default-theme`, section: 'Theming' },
	{ title: 'Override', link: `${base}/theming/override`, section: 'Theming' },
	{ title: 'Server Side Rendering', link: `${base}/theming/ssr`, section: 'Theming' },
	{ title: 'SvelteUIProvider', link: `${base}/theming/svelteui-provider`, section: 'Theming' },
	{ title: 'Utilities', link: `${base}/theming/stitches-utilities`, section: 'Theming' },

	{ title: 'ActionIcon', link: `${base}/core/action-icon`, section: 'Components' },
	{ title: 'Affix', link: `${base}/core/affix`, section: 'Components' },
	{ title: 'Alert', link: `${base}/core/alert`, section: 'Components' },
	{ title: 'Anchor', link: `${base}/core/anchor`, section: 'Components' },
	{ title: 'AppShell', link: `${base}/core/app-shell`, section: 'Components' },
	{ title: 'Badge', link: `${base}/core/badge`, section: 'Components' },
	{ title: 'Box', link: `${base}/core/box`, section: 'Components' },
	{ title: 'Burger', link: `${base}/core/burger`, section: 'Components' },
	{ title: 'Button', link: `${base}/core/button`, section: 'Components' },
	{ title: 'Card', link: `${base}/core/card`, section: 'Components' },
	{ title: 'Center', link: `${base}/core/center`, section: 'Components' },
	{ title: 'Checkbox', link: `${base}/core/checkbox`, section: 'Components' },
	{ title: 'Chip', link: `${base}/core/chip`, section: 'Components' },
	{ title: 'Code', link: `${base}/core/code`, section: 'Components' },
	{ title: 'Container', link: `${base}/core/container`, section: 'Components' },
	{ title: 'Divider', link: `${base}/core/divider`, section: 'Components' },
	{ title: 'Grid', link: `${base}/core/grid`, section: 'Components' },
	{ title: 'Group', link: `${base}/core/group`, section: 'Components' },
	{ title: 'Image', link: `${base}/core/image`, section: 'Components' },
	{ title: 'InputWrapper', link: `${base}/core/input-wrapper`, section: 'Components' },
	{ title: 'Input', link: `${base}/core/input`, section: 'Components' },
	{ title: 'Kbd', link: `${base}/core/kbd`, section: 'Components' },
	{ title: 'Loader', link: `${base}/core/loader`, section: 'Components' },
	{ title: 'MediaQuery', link: `${base}/core/media-query`, section: 'Components' },
	{ title: 'Menu', link: `${base}/core/menu`, section: 'Components' },
	{ title: 'Modal', link: `${base}/core/modal`, section: 'Components' },
	{ title: 'NativeSelect', link: `${base}/core/native-select`, section: 'Components' },
	{ title: 'Notification', link: `${base}/core/notification`, section: 'Components' },
	{ title: 'NumberInput', link: `${base}/core/number-input`, section: 'Components' },
	{ title: 'ObserverRender', link: `${base}/core/observer-render`, section: 'Components' },
	{ title: 'Overlay', link: `${base}/core/overlay`, section: 'Components' },
	{ title: 'Paper', link: `${base}/core/paper`, section: 'Components' },
	{ title: 'Popper', link: `${base}/core/popper`, section: 'Components' },
	{ title: 'Portal', link: `${base}/core/portal`, section: 'Components' },
	{ title: 'Progress', link: `${base}/core/progress`, section: 'Components' },
	{ title: 'SEO', link: `${base}/core/seo`, section: 'Components' },
	{ title: 'SimpleGrid', link: `${base}/core/simple-grid`, section: 'Components' },
	{ title: 'Skeleton', link: `${base}/core/skeleton`, section: 'Components' },
	{ title: 'Space', link: `${base}/core/space`, section: 'Components' },
	{ title: 'Stack', link: `${base}/core/stack`, section: 'Components' },
	{ title: 'Switch', link: `${base}/core/switch`, section: 'Components' },
	{ title: 'Tabs', link: `${base}/core/tabs`, section: 'Components' },
	{ title: 'TextInput', link: `${base}/core/text-input`, section: 'Components' },
	{ title: 'Text', link: `${base}/core/text`, section: 'Components' },
	{ title: 'ThemeIcon', link: `${base}/core/theme-icon`, section: 'Components' },
	{ title: 'Timeline', link: `${base}/core/timeline`, section: 'Components' },
	{ title: 'Title', link: `${base}/core/title`, section: 'Components' },
	{ title: 'Tooptip', link: `${base}/core/tooltip`, section: 'Components' },
	{ title: 'TypographyProvider', link: `${base}/core/typography-provider`, section: 'Components' },
	{ title: 'UnstyledButton', link: `${base}/core/unstyled-button`, section: 'Components' },

	{
		title: 'use-browser-context',
		link: `${base}/composables/use-browser-context`,
		section: 'Composables'
	},
	{
		title: 'use-click-outside',
		link: `${base}/composables/use-click-outside`,
		section: 'Composables'
	},
	{ title: 'use-clipboard', link: `${base}/composables/use-clipboard`, section: 'Composables' },
	{
		title: 'use-css-variable',
		link: `${base}/composables/use-css-variable`,
		section: 'Composables'
	},
	{ title: 'use-debounce', link: `${base}/composables/use-debounce`, section: 'Composables' },
	{ title: 'use-download', link: `${base}/composables/use-download`, section: 'Composables' },
	{
		title: 'use-element-size',
		link: `${base}/composables/use-element-size`,
		section: 'Composables'
	},
	{ title: 'use-eye-dropper', link: `${base}/composables/use-eye-dropper`, section: 'Composables' },
	{
		title: 'use-focus-within',
		link: `${base}/composables/use-focus-within`,
		section: 'Composables'
	},
	{ title: 'use-focus', link: `${base}/composables/use-focus`, section: 'Composables' },
	{ title: 'use-hash', link: `${base}/composables/use-hash`, section: 'Composables' },
	{ title: 'use-hot-key', link: `${base}/composables/use-hot-key`, section: 'Composables' },
	{ title: 'use-id', link: `${base}/composables/use-id`, section: 'Composables' },
	{ title: 'use-io', link: `${base}/composables/use-io`, section: 'Composables' },
	{ title: 'use-lazy', link: `${base}/composables/use-lazy`, section: 'Composables' },
	{ title: 'use-lock-scroll', link: `${base}/composables/use-lock-scroll`, section: 'Composables' },
	{ title: 'use-long-press', link: `${base}/composables/use-long-press`, section: 'Composables' },
	{
		title: 'use-mouse-position',
		link: `${base}/composables/use-mouse-position`,
		section: 'Composables'
	},
	{ title: 'use-os', link: `${base}/composables/use-os`, section: 'Composables' },
	{ title: 'use-page-leave', link: `${base}/composables/use-page-leave`, section: 'Composables' },
	{
		title: 'use-persistent-tab',
		link: `${base}/composables/use-persistent-tab`,
		section: 'Composables'
	},
	{ title: 'use-portal', link: `${base}/composables/use-portal`, section: 'Composables' },
	{ title: 'use-raf-fn', link: `${base}/composables/use-raf-fn`, section: 'Composables' },
	{ title: 'use-tab-leave', link: `${base}/composables/use-tab-leave`, section: 'Composables' },
	{ title: 'use-throttle', link: `${base}/composables/use-throttle`, section: 'Composables' },
	{
		title: 'use-viewport-size',
		link: `${base}/composables/use-viewport-size`,
		section: 'Composables'
	},
	{ title: 'use-web-worker', link: `${base}/composables/use-web-worker`, section: 'Composables' },

	{ title: 'SvelteUI Dates', link: `${base}/dates/getting-started-dates`, section: 'Dates' },
	{ title: 'Month', link: `${base}/dates/month`, section: 'Dates' },

	{
		title: 'SvelteUI Preprocessors',
		link: `${base}/preprocessors/getting-started-preprocessors`,
		section: 'Preprocessors'
	},
	{ title: 'view-source', link: `${base}/preprocessors/view-source`, section: 'Preprocessors' },

	{ title: 'Typewriter', link: `${base}/motion/typewriter`, section: 'Motion' },
	{ title: 'Flipboard', link: `${base}/motion/flipboard`, section: 'Motion' },

	{ title: 'Prism', link: `${base}/others/prism`, section: 'Others' }
];

const links = [
	{ title: 'Discord', href: 'https://discord.gg/2J2xmzCS79' },
	{ title: 'GitHub', href: 'https://github.com/svelteuidev/svelteui' }
];

export const config = {
	never: 'never',
	links,
	buttons: [
		{
			title: 'Discord',
			props: {
				override: discordStyles,
				variant: 'filled' as ActionIconVariant,
				href: links[0].href
			},
			icon: DiscordLogo
		},
		{
			title: 'GitHub',
			props: {
				override: baseStyles,
				variant: 'outline' as ActionIconVariant,
				href: links[1].href
			},
			icon: GithubLogo
		}
	]
};
