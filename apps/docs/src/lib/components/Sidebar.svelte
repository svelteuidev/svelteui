<script lang="ts">
	import { MainLink, NavigationTitle } from '$lib/components';
	import { Space, Accordion, createStyles } from '@svelteuidev/core';
	import {
		Layout,
		Input,
		Stack,
		Dashboard,
		LetterCaseToggle,
		ExclamationTriangle,
		BoxModel
	} from 'radix-icons-svelte';
	import {
		Cube,
		Download,
		GithubLogo,
		HamburgerMenu,
		QuestionMarkCircled,
		StarFilled,
		LightningBolt,
		Archive
	} from 'radix-icons-svelte';
	import { base } from '$app/paths';
	import SidebarLink from './SidebarLink.svelte';

	interface Props {
		pathname: string;
	}

	let { pathname }: Props = $props();

	const useStyles = createStyles(() => ({
		'.svelteui-AccordionItem-panel': {
			padding: '0 !important',
			paddingBottom: '8px !important'
		},
		'.svelteui-AccordionItem-root': {
			borderBottom: '0 !important'
		},
		'.svelteui-AccordionItem-control': {
			paddingLeft: '0 !important',
			paddingRight: '0 !important'
		},
		'.svelteui-AccordionItem-chevron': {
			marginRight: '6px !important'
		},
		'.svelteui-AccordionItem-controlContent': {
			paddingTop: '8px !important',
			paddingBottom: '8px !important'
		}
	}));
	let { getStyles } = $derived(useStyles());
</script>

<ul>
	<li>
		<MainLink color="blue" href="{base}/introduction">
			{#snippet icon()}
				<Cube size={20} />
			{/snippet}
			Introduction
		</MainLink>
	</li>
	<li>
		<MainLink color="red" href="{base}/installation">
			{#snippet icon()}
				<Download size={20} />
			{/snippet}
			Installation
		</MainLink>
	</li>
	<li>
		<MainLink color="green" href="{base}/basics">
			{#snippet icon()}
				<StarFilled size={20} />
			{/snippet}
			Learn The Basics
		</MainLink>
	</li>
	<li>
		<MainLink color="dark" href="{base}/contributing">
			{#snippet icon()}
				<GithubLogo size={20} />
			{/snippet}
			Contributing
		</MainLink>
	</li>
	<!-- - <MainLink color={null} href={suiCollections}><Logo slot='icon' size={30} />SvelteUI Collections</MainLink> -->
	<li>
		<MainLink color="indigo" href="{base}/faq">
			{#snippet icon()}
				<QuestionMarkCircled size={20} />
			{/snippet}
			FAQ
		</MainLink>
	</li>
</ul>

<hr />

<Accordion variant="default" chevronPosition="left" multiple class={getStyles()}>
	<Accordion.Item value="changelog">
		{#snippet control()}
			<div><NavigationTitle>Changelog</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<SidebarLink link={`${base}/changelog/v0-15-0`} {pathname}>Version 0.15.0</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/changelog/v0-14-0`} {pathname}>Version 0.14.0</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/changelog/v0-13-0`} {pathname}>Version 0.13.0</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/changelog/v0-12-0`} {pathname}>Version 0.12.0</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/changelog/v0-11-0`} {pathname}>Version 0.11.0</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/changelog/v0-10-0`} {pathname}>Version 0.10.0</SidebarLink>
			</li>
			<li><SidebarLink link={`${base}/changelog/v0-7-0`} {pathname}>Version 0.7.0</SidebarLink></li>
			<li><SidebarLink link={`${base}/changelog/v0-6-5`} {pathname}>Version 0.6.5</SidebarLink></li>
			<li><SidebarLink link={`${base}/changelog/v0-6-0`} {pathname}>Version 0.6.0</SidebarLink></li>
			<li><SidebarLink link={`${base}/changelog/v0-5-5`} {pathname}>Version 0.5.5</SidebarLink></li>
			<li><SidebarLink link={`${base}/changelog/v0-5-0`} {pathname}>Version 0.5.0</SidebarLink></li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="theming">
		{#snippet control()}
			<div><NavigationTitle>Theming</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<SidebarLink link={`${base}/theming/svelteui-provider`} {pathname}>
					SvelteUIProvider
				</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/theming/create-styles`} {pathname}>Creating styles</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/theming/default-theme`} {pathname}>Default Theme</SidebarLink>
			</li>
			<li><SidebarLink link={`${base}/theming/dark-theme`} {pathname}>Dark Theme</SidebarLink></li>
			<li>
				<SidebarLink link={`${base}/theming/override`} {pathname}>Override styles</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/theming/ssr`} {pathname}>Server side rendering</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/theming/stitches-utilities`} {pathname}>
					Stitches utilities
				</SidebarLink>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_core">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Core (Components)</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<strong><Layout /><Space w="md" />Layout</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/app-shell`} {pathname}>AppShell</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/aspect-ratio`} {pathname}>AspectRatio</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/container`} {pathname}>Container</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/center`} {pathname}>Center</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/flex`} {pathname}>Flex</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/grid`} {pathname}>Grid</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/group`} {pathname}>Group</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/media-query`} {pathname}>MediaQuery</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/core/simple-grid`} {pathname}>SimpleGrid</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/space`} {pathname}>Space</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/stack`} {pathname}>Stack</SidebarLink></li>
				</ul>
			</li>
			<li>
				<strong><Input /><Space w="md" />Inputs & Actions</strong>
				<ul>
					<li>
						<SidebarLink link={`${base}/core/action-icon`} {pathname}>ActionIcon</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/button`} {pathname}>Button</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/checkbox`} {pathname}>Checkbox</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/chip`} {pathname}>Chip</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/input`} {pathname}>Input</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/input-wrapper`} {pathname}>InputWrapper</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/json-input`} {pathname}>JsonInput</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/native-select`} {pathname}>NativeSelect</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/core/number-input`} {pathname}>NumberInput</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/core/password-input`} {pathname}>PasswordInput</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/radio`} {pathname}>Radio</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/switch`} {pathname}>Switch</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/textarea`} {pathname}>Textarea</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/text-input`} {pathname}>TextInput</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/unstyled-button`} {pathname}
							>UnstyledButton</SidebarLink
						>
					</li>
				</ul>
			</li>
			<li>
				<strong><HamburgerMenu /><Space w="md" />Navigation</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/anchor`} {pathname}>Anchor</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/breadcrumbs`} {pathname}>Breadcrumbs</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/burger`} {pathname}>Burger</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/seo`} {pathname}>Seo</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/tabs`} {pathname}>Tabs</SidebarLink></li>
				</ul>
			</li>
			<li>
				<strong><Dashboard /><Space w="md" />Data Display</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/accordion`} {pathname}>Accordion</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/badge`} {pathname}>Badge</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/card`} {pathname}>Card</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/image`} {pathname}>Image</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/kbd`} {pathname}>Kbd</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/theme-icon`} {pathname}>ThemeIcon</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/timeline`} {pathname}>Timeline</SidebarLink></li>
				</ul>
			</li>
			<li>
				<strong><ExclamationTriangle /><Space w="md" />Feedback</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/alert`} {pathname}>Alert</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/loader`} {pathname}>Loader</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/notification`} {pathname}>Notification</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/core/progress`} {pathname}>Progress</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/skeleton`} {pathname}>Skeleton</SidebarLink></li>
				</ul>
			</li>
			<li>
				<strong><Stack /><Space w="md" />Overlay</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/affix`} {pathname}>Affix</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/menu`} {pathname}>Menu</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/modal`} {pathname}>Modal</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/overlay`} {pathname}>Overlay</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/tooltip`} {pathname}>Tooltip</SidebarLink></li>
				</ul>
			</li>
			<li>
				<strong><LetterCaseToggle /><Space w="md" />Typography</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/blockquote`} {pathname}>Blockquote</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/code`} {pathname}>Code</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/mark`} {pathname}>Mark</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/text`} {pathname}>Text</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/title`} {pathname}>Title</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/typography-provider`} {pathname}
							>TypographyProvider</SidebarLink
						>
					</li>
				</ul>
			</li>
			<li>
				<strong><BoxModel /><Space w="md" />Miscellaneous</strong>
				<ul>
					<li><SidebarLink link={`${base}/core/box`} {pathname}>Box</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/collapse`} {pathname}>Collapse</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/divider`} {pathname}>Divider</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/core/observer-render`} {pathname}
							>ObserverRender</SidebarLink
						>
					</li>
					<li><SidebarLink link={`${base}/core/paper`} {pathname}>Paper</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/popper`} {pathname}>Popper</SidebarLink></li>
					<li><SidebarLink link={`${base}/core/portal`} {pathname}>Portal</SidebarLink></li>
				</ul>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_composables">
		{#snippet control()}
			<div>
				<NavigationTitle>SvelteUI Composables (Svelte Actions)</NavigationTitle>
			</div>
		{/snippet}
		<ul class="list">
			<li>
				<strong><LightningBolt /><Space w="md" />Actions</strong>
				<ul>
					<li>
						<SidebarLink link={`${base}/composables/use-click-outside`} {pathname}>
							use-click-outside
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-clipboard`} {pathname}
							>use-clipboard</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-css-variable`} {pathname}
							>use-css-variable</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-download`} {pathname}
							>use-download</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-focus`} {pathname}>use-focus</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-focus-trap`} {pathname}
							>use-focus-trap</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-hot-key`} {pathname}
							>use-hot-key</SidebarLink
						>
					</li>
					<li><SidebarLink link={`${base}/composables/use-io`} {pathname}>use-io</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/composables/use-lazy`} {pathname}>use-lazy</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-lock-scroll`} {pathname}
							>use-lock-scroll</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-long-press`} {pathname}
							>use-long-press</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-move`} {pathname}>use-move</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-persistent-tab`} {pathname}>
							use-persistent-tab
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-portal`} {pathname}>use-portal</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-page-leave`} {pathname}
							>use-page-leave</SidebarLink
						>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-tab-leave`} {pathname}
							>use-tab-leave</SidebarLink
						>
					</li>
				</ul>
			</li>
			<li>
				<strong><Archive /><Space w="md" />Utilities</strong>
				<ul>
					<li>
						<SidebarLink link={`${base}/composables/use-browser-context`} {pathname}>
							use-browser-context
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-debounce`} {pathname}>
							use-debounce
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-element-size`} {pathname}>
							use-element-size
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-eye-dropper`} {pathname}>
							use-eye-dropper
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-focus-return`} {pathname}>
							use-focus-return
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-focus-within`} {pathname}>
							use-focus-within
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-hash`} {pathname}>use-hash</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/composables/use-id`} {pathname}>use-id</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/composables/use-mouse-position`} {pathname}>
							use-mouse-position
						</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/composables/use-os`} {pathname}>use-os</SidebarLink></li>
					<li>
						<SidebarLink link={`${base}/composables/use-raf-fn`} {pathname}>use-raf-fn</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-throttle`} {pathname}>
							use-throttle
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-viewport-size`} {pathname}>
							use-viewport-size
						</SidebarLink>
					</li>
					<li>
						<SidebarLink link={`${base}/composables/use-web-worker`} {pathname}>
							use-web-worker
						</SidebarLink>
					</li>
				</ul>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_dates">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Dates</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<SidebarLink link={`${base}/dates/getting-started`} {pathname}>Getting Started</SidebarLink>
			</li>
			<li><SidebarLink link={`${base}/dates/month`} {pathname}>Month</SidebarLink></li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_preprocessors">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Preprocessors</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<SidebarLink link={`${base}/preprocessors/getting-started`} {pathname}>
					Getting Started
				</SidebarLink>
			</li>
			<li>
				<SidebarLink link={`${base}/preprocessors/view-source`} {pathname}>view-source</SidebarLink>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_motion">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Motion</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li>
				<strong>Transitions</strong>
				<ul>
					<li>
						<SidebarLink link={`${base}/motion/typewriter`} {pathname}>Typewriter</SidebarLink>
					</li>
					<li><SidebarLink link={`${base}/motion/flipboard`} {pathname}>Flipboard</SidebarLink></li>
				</ul>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="other_packages">
		{#snippet control()}
			<div>
				<NavigationTitle>Other Packages</NavigationTitle>
			</div>
		{/snippet}
		<ul class="list">
			<li><SidebarLink link={`${base}/others/prism`} {pathname}>Prism</SidebarLink></li>
		</ul>
	</Accordion.Item>
</Accordion>
