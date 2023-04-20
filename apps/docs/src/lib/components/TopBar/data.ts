import { GithubLogo } from 'radix-icons-svelte';
import { default as DiscordLogo } from '../svgs/Discord.svelte';

const baseStyles = {};

const discordStyles = {
	...baseStyles,
	bc: '#6875f5',
	'&:hover': {
		bc: '#5850ec'
	}
};

export const searchLinks = [
  { title: "Introduction", link: "/introduction", section: "Essentials" },
  { title: "Installation", link: "/installation", section: "Essentials" },
  { title: "Learn the Basics", link: "/basics", section: "Essentials" },
  { title: "Contributing", link: "/contributing", section: "Essentials" },
  { title: "FAQ", link: "/faq", section: "Essentials" },

  { title: "Version 0.5.0", link: "/changelog/v0-5-0", section: "Changelog" },
  { title: "Version 0.5.5", link: "/changelog/v0-5-5", section: "Changelog" },
  { title: "Version 0.6.0", link: "/changelog/v0-6-0", section: "Changelog" },
  { title: "Version 0.6.5", link: "/changelog/v0-6-5", section: "Changelog" },
  { title: "Version 0.7.0", link: "/changelog/v0-7-0", section: "Changelog" },

  { title: "Customize Theme", link: "/theming/create-styles", section: "Theming" },
  { title: "Dark Theme", link: "/theming/dark-theme", section: "Theming" },
  { title: "Default Theme", link: "/theming/default-theme", section: "Theming" },
  { title: "Override", link: "/theming/override", section: "Theming" },
  { title: "Server Side Rendering", link: "/theming/ssr", section: "Theming" },
  { title: "SvelteUIProvider", link: "/theming/svelteui-provider", section: "Theming" },
  { title: "Utilities", link: "/theming/utilities", section: "Theming" },

  { title: "ActionIcon", link: "/core/action-icon", section: "Components" },
  { title: "Affix", link: "/core/affix", section: "Components" },
  { title: "Alert", link: "/core/alert", section: "Components" },
  { title: "Anchor", link: "/core/anchor", section: "Components" },
  { title: "AppShell", link: "/core/app-shell", section: "Components" },
  { title: "Badge", link: "/core/badge", section: "Components" },
  { title: "Box", link: "/core/box", section: "Components" },
  { title: "Burger", link: "/core/burger", section: "Components" },
  { title: "Button", link: "/core/button", section: "Components" },
  { title: "Card", link: "/core/card", section: "Components" },
  { title: "Center", link: "/core/center", section: "Components" },
  { title: "Checkbox", link: "/core/checkbox", section: "Components" },
  { title: "Chip", link: "/core/chip", section: "Components" },
  { title: "Code", link: "/core/code", section: "Components" },
  { title: "Container", link: "/core/container", section: "Components" },
  { title: "Divider", link: "/core/divider", section: "Components" },
  { title: "Grid", link: "/core/grid", section: "Components" },
  { title: "Group", link: "/core/group", section: "Components" },
  { title: "Image", link: "/core/image", section: "Components" },
  { title: "InputWrapper", link: "/core/input-wrapper", section: "Components" },
  { title: "Input", link: "/core/input", section: "Components" },
  { title: "Kbd", link: "/core/kbd", section: "Components" },
  { title: "Loader", link: "/core/loader", section: "Components" },
  { title: "MediaQuery", link: "/core/media-query", section: "Components" },
  { title: "Menu", link: "/core/menu", section: "Components" },
  { title: "Modal", link: "/core/modal", section: "Components" },
  { title: "NativeSelect", link: "/core/native-select", section: "Components" },
  { title: "Notification", link: "/core/notification", section: "Components" },
  { title: "NumberInput", link: "/core/number-input", section: "Components" },
  { title: "ObserverRender", link: "/core/observer-render", section: "Components" },
  { title: "Overlay", link: "/core/overlay", section: "Components" },
  { title: "Paper", link: "/core/paper", section: "Components" },
  { title: "Popper", link: "/core/popper", section: "Components" },
  { title: "Portal", link: "/core/portal", section: "Components" },
  { title: "Progress", link: "/core/progress", section: "Components" },
  { title: "SEO", link: "/core/seo", section: "Components" },
  { title: "SimpleGrid", link: "/core/simple-grid", section: "Components" },
  { title: "Skeleton", link: "/core/skeleton", section: "Components" },
  { title: "Space", link: "/core/space", section: "Components" },
  { title: "Stack", link: "/core/stack", section: "Components" },
  { title: "Switch", link: "/core/switch", section: "Components" },
  { title: "Tabs", link: "/core/tabs", section: "Components" },
  { title: "TextInput", link: "/core/text-input", section: "Components" },
  { title: "Text", link: "/core/text", section: "Components" },
  { title: "ThemeIcon", link: "/core/theme-icon", section: "Components" },
  { title: "Timeline", link: "/core/timeline", section: "Components" },
  { title: "Title", link: "/core/title", section: "Components" },
  { title: "Tooptip", link: "/core/tooltip", section: "Components" },
  { title: "TypographyProvider", link: "/core/typography-provider", section: "Components" },
  { title: "UnstyledButton", link: "/core/unstyled-button", section: "Components" },

  { title: "use-browser-context", link: "/composables/use-browser-context", section: "Composables" },
  { title: "use-click-outside", link: "/composables/use-click-outside", section: "Composables" },
  { title: "use-clipboard", link: "/composables/use-clipboard", section: "Composables" },
  { title: "use-css-variable", link: "/composables/use-css-variable", section: "Composables" },
  { title: "use-debounce", link: "/composables/use-debounce", section: "Composables" },
  { title: "use-download", link: "/composables/use-download", section: "Composables" },
  { title: "use-element-size", link: "/composables/use-element-size", section: "Composables" },
  { title: "use-eye-dropper", link: "/composables/use-eye-dropper", section: "Composables" },
  { title: "use-focus-within", link: "/composables/use-focus-within", section: "Composables" },
  { title: "use-focus", link: "/composables/use-focus", section: "Composables" },
  { title: "use-hash", link: "/composables/use-hash", section: "Composables" },
  { title: "use-hot-key", link: "/composables/use-hot-key", section: "Composables" },
  { title: "use-id", link: "/composables/use-id", section: "Composables" },
  { title: "use-io", link: "/composables/use-io", section: "Composables" },
  { title: "use-lazy", link: "/composables/use-lazy", section: "Composables" },
  { title: "use-lock-scroll", link: "/composables/use-lock-scroll", section: "Composables" },
  { title: "use-long-press", link: "/composables/use-long-press", section: "Composables" },
  { title: "use-mouse-position", link: "/composables/use-mouse-position", section: "Composables" },
  { title: "use-os", link: "/composables/use-os", section: "Composables" },
  { title: "use-page-leave", link: "/composables/use-page-leave", section: "Composables" },
  { title: "use-persistent-tab", link: "/composables/use-persistent-tab", section: "Composables" },
  { title: "use-portal", link: "/composables/use-portal", section: "Composables" },
  { title: "use-raf-fn", link: "/composables/use-raf-fn", section: "Composables" },
  { title: "use-tab-leave", link: "/composables/use-tab-leave", section: "Composables" },
  { title: "use-throttle", link: "/composables/use-throttle", section: "Composables" },
  { title: "use-viewport-size", link: "/composables/use-viewport-size", section: "Composables" },
  { title: "use-web-worker", link: "/composables/use-web-worker", section: "Composables" },

  { title: "SvelteUI Dates", link: "dates/getting-started-dates", section: "Dates" },
  { title: "Month", link: "/dates/month", section: "Dates" },

  { title: "SvelteUI Preprocessors", link: "preprocessors/getting-started-preprocessors", section: "Preprocessors"},
  { title: "view-source", link: "/preprocessors/view-source", section: "Preprocessors"},

  { title: "Typewriter", link: "/motion/typewriter", section: "Motion" },
  { title: "Flipboard", link: "/motion/flipboard", section: "Motion" },

  { title: "Prism", link: "/others/prism", section: "Others"},
]

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
				color: 'blue',
				variant: 'filled',
				href: links[0].href
			},
			icon: DiscordLogo
		},
		{
			title: 'GitHub',
			props: {
				override: baseStyles,
				color: 'dark',
				variant: 'outline',
				href: links[1].href
			},
			icon: GithubLogo
		}
	]
};
