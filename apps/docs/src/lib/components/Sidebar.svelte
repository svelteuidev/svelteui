<script lang="ts">
	import { onMount } from 'svelte';

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

	interface Props {
		pathname: string;
	}

	let { pathname }: Props = $props();

	let accordionEl: HTMLElement | undefined = $state();
	onMount(() => {
		// Sets the active link in the Sidebar when the page changes
		accordionEl?.querySelectorAll('a').forEach((a) => {
			if (a.getAttribute('href') === pathname) {
				a.classList.add('active');
			} else {
				a.classList.remove('active');
			}
		});
	});

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

<Accordion
	bind:element={accordionEl}
	variant="default"
	chevronPosition="left"
	multiple
	class={getStyles()}
>
	<Accordion.Item value="changelog">
		{#snippet control()}
			<div><NavigationTitle>Changelog</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li><a href={`${base}/changelog/v0-15-0`}>Version 0.15.0</a></li>
			<li><a href={`${base}/changelog/v0-14-0`}>Version 0.14.0</a></li>
			<li><a href={`${base}/changelog/v0-13-0`}>Version 0.13.0</a></li>
			<li><a href={`${base}/changelog/v0-12-0`}>Version 0.12.0</a></li>
			<li><a href={`${base}/changelog/v0-11-0`}>Version 0.11.0</a></li>
			<li><a href={`${base}/changelog/v0-10-0`}>Version 0.10.0</a></li>
			<li><a href={`${base}/changelog/v0-7-0`}>Version 0.7.0</a></li>
			<li><a href={`${base}/changelog/v0-6-5`}>Version 0.6.5</a></li>
			<li><a href={`${base}/changelog/v0-6-0`}>Version 0.6.0</a></li>
			<li><a href={`${base}/changelog/v0-5-5`}>Version 0.5.5</a></li>
			<li><a href={`${base}/changelog/v0-5-0`}>Version 0.5.0</a></li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="theming">
		{#snippet control()}
			<div><NavigationTitle>Theming</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li><a href={`${base}/theming/svelteui-provider`}>SvelteUIProvider</a></li>
			<li><a href={`${base}/theming/create-styles`}>Creating styles</a></li>
			<li><a href={`${base}/theming/default-theme`}>Default Theme</a></li>
			<li><a href={`${base}/theming/dark-theme`}>Dark Theme</a></li>
			<li><a href={`${base}/theming/override`}>Override styles</a></li>
			<li><a href={`${base}/theming/ssr`}>Server side rendering</a></li>
			<li><a href={`${base}/theming/stitches-utilities`}>Stitches utilities</a></li>
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
					<li><a href={`${base}/core/app-shell`}>AppShell</a></li>
					<li><a href={`${base}/core/aspect-ratio`}>AspectRatio</a></li>
					<li><a href={`${base}/core/container`}>Container</a></li>
					<li><a href={`${base}/core/center`}>Center</a></li>
					<li><a href={`${base}/core/flex`}>Flex</a></li>
					<li><a href={`${base}/core/grid`}>Grid</a></li>
					<li><a href={`${base}/core/group`}>Group</a></li>
					<li><a href={`${base}/core/media-query`}>MediaQuery</a></li>
					<li><a href={`${base}/core/simple-grid`}>SimpleGrid</a></li>
					<li><a href={`${base}/core/space`}>Space</a></li>
					<li><a href={`${base}/core/stack`}>Stack</a></li>
				</ul>
			</li>
			<li>
				<strong><Input /><Space w="md" />Inputs & Actions</strong>
				<ul>
					<li><a href={`${base}/core/action-icon`}>ActionIcon</a></li>
					<li><a href={`${base}/core/button`}>Button</a></li>
					<li><a href={`${base}/core/checkbox`}>Checkbox</a></li>
					<li><a href={`${base}/core/chip`}>Chip</a></li>
					<li><a href={`${base}/core/input`}>Input</a></li>
					<li><a href={`${base}/core/input-wrapper`}>InputWrapper</a></li>
					<li><a href={`${base}/core/json-input`}>JsonInput</a></li>
					<li><a href={`${base}/core/native-select`}>NativeSelect</a></li>
					<li><a href={`${base}/core/number-input`}>NumberInput</a></li>
					<li><a href={`${base}/core/password-input`}>PasswordInput</a></li>
					<li><a href={`${base}/core/radio`}>Radio</a></li>
					<li><a href={`${base}/core/switch`}>Switch</a></li>
					<li><a href={`${base}/core/textarea`}>Textarea</a></li>
					<li><a href={`${base}/core/text-input`}>TextInput</a></li>
					<li><a href={`${base}/core/unstyled-button`}>UnstyledButton</a></li>
				</ul>
			</li>
			<li>
				<strong><HamburgerMenu /><Space w="md" />Navigation</strong>
				<ul>
					<li><a href={`${base}/core/anchor`}>Anchor</a></li>
					<li><a href={`${base}/core/breadcrumbs`}>Breadcrumbs</a></li>
					<li><a href={`${base}/core/burger`}>Burger</a></li>
					<li><a href={`${base}/core/seo`}>Seo</a></li>
					<li><a href={`${base}/core/tabs`}>Tabs</a></li>
				</ul>
			</li>
			<li>
				<strong><Dashboard /><Space w="md" />Data Display</strong>
				<ul>
					<li><a href={`${base}/core/accordion`}>Accordion</a></li>
					<li><a href={`${base}/core/badge`}>Badge</a></li>
					<li><a href={`${base}/core/card`}>Card</a></li>
					<li><a href={`${base}/core/image`}>Image</a></li>
					<li><a href={`${base}/core/kbd`}>Kbd</a></li>
					<li><a href={`${base}/core/theme-icon`}>ThemeIcon</a></li>
					<li><a href={`${base}/core/timeline`}>Timeline</a></li>
				</ul>
			</li>
			<li>
				<strong><ExclamationTriangle /><Space w="md" />Feedback</strong>
				<ul>
					<li><a href={`${base}/core/alert`}>Alert</a></li>
					<li><a href={`${base}/core/loader`}>Loader</a></li>
					<li><a href={`${base}/core/notification`}>Notification</a></li>
					<li><a href={`${base}/core/progress`}>Progress</a></li>
					<li><a href={`${base}/core/skeleton`}>Skeleton</a></li>
				</ul>
			</li>
			<li>
				<strong><Stack /><Space w="md" />Overlay</strong>
				<ul>
					<li><a href={`${base}/core/affix`}>Affix</a></li>
					<li><a href={`${base}/core/menu`}>Menu</a></li>
					<li><a href={`${base}/core/modal`}>Modal</a></li>
					<li><a href={`${base}/core/overlay`}>Overlay</a></li>
					<li><a href={`${base}/core/tooltip`}>Tooltip</a></li>
				</ul>
			</li>
			<li>
				<strong><LetterCaseToggle /><Space w="md" />Typography</strong>
				<ul>
					<li><a href={`${base}/core/blockquote`}>Blockquote</a></li>
					<li><a href={`${base}/core/code`}>Code</a></li>
					<li><a href={`${base}/core/mark`}>Mark</a></li>
					<li><a href={`${base}/core/text`}>Text</a></li>
					<li><a href={`${base}/core/title`}>Title</a></li>
					<li><a href={`${base}/core/typography-provider`}>TypographyProvider</a></li>
				</ul>
			</li>
			<li>
				<strong><BoxModel /><Space w="md" />Miscellaneous</strong>
				<ul>
					<li><a href={`${base}/core/box`}>Box</a></li>
					<li><a href={`${base}/core/collapse`}>Collapse</a></li>
					<li><a href={`${base}/core/divider`}>Divider</a></li>
					<li><a href={`${base}/core/observer-render`}>ObserverRender</a></li>
					<li><a href={`${base}/core/paper`}>Paper</a></li>
					<li><a href={`${base}/core/popper`}>Popper</a></li>
					<li><a href={`${base}/core/portal`}>Portal</a></li>
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
					<li><a href={`${base}/composables/use-click-outside`}>use-click-outside</a></li>
					<li><a href={`${base}/composables/use-clipboard`}>use-clipboard</a></li>
					<li><a href={`${base}/composables/use-css-variable`}>use-css-variable</a></li>
					<li><a href={`${base}/composables/use-download`}>use-download</a></li>
					<li><a href={`${base}/composables/use-focus`}>use-focus</a></li>
					<li><a href={`${base}/composables/use-focus-trap`}>use-focus-trap</a></li>
					<li><a href={`${base}/composables/use-hot-key`}>use-hot-key</a></li>
					<li><a href={`${base}/composables/use-io`}>use-io</a></li>
					<li><a href={`${base}/composables/use-lazy`}>use-lazy</a></li>
					<li><a href={`${base}/composables/use-lock-scroll`}>use-lock-scroll</a></li>
					<li><a href={`${base}/composables/use-long-press`}>use-long-press</a></li>
					<li><a href={`${base}/composables/use-move`}>use-move</a></li>
					<li><a href={`${base}/composables/use-persistent-tab`}>use-persistent-tab</a></li>
					<li><a href={`${base}/composables/use-portal`}>use-portal</a></li>
					<li><a href={`${base}/composables/use-page-leave`}>use-page-leave</a></li>
					<li><a href={`${base}/composables/use-tab-leave`}>use-tab-leave</a></li>
				</ul>
			</li>
			<li>
				<strong><Archive /><Space w="md" />Utilities</strong>
				<ul>
					<li><a href={`${base}/composables/use-browser-context`}>use-browser-context</a></li>
					<li><a href={`${base}/composables/use-debounce`}>use-debounce</a></li>
					<li><a href={`${base}/composables/use-element-size`}>use-element-size</a></li>
					<li><a href={`${base}/composables/use-eye-dropper`}>use-eye-dropper</a></li>
					<li><a href={`${base}/composables/use-focus-return`}>use-focus-return</a></li>
					<li><a href={`${base}/composables/use-focus-within`}>use-focus-within</a></li>
					<li><a href={`${base}/composables/use-hash`}>use-hash</a></li>
					<li><a href={`${base}/composables/use-id`}>use-id</a></li>
					<li><a href={`${base}/composables/use-mouse-position`}>use-mouse-position</a></li>
					<li><a href={`${base}/composables/use-os`}>use-os</a></li>
					<li><a href={`${base}/composables/use-raf-fn`}>use-raf-fn</a></li>
					<li><a href={`${base}/composables/use-throttle`}>use-throttle</a></li>
					<li><a href={`${base}/composables/use-viewport-size`}>use-viewport-size</a></li>
					<li><a href={`${base}/composables/use-web-worker`}>use-web-worker</a></li>
				</ul>
			</li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_dates">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Dates</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li><a href={`${base}/dates/getting-started`}>Getting Started</a></li>
			<li><a href={`${base}/dates/month`}>Month</a></li>
		</ul>
	</Accordion.Item>
	<Accordion.Item value="svelteui_preprocessors">
		{#snippet control()}
			<div><NavigationTitle>SvelteUI Preprocessors</NavigationTitle></div>
		{/snippet}
		<ul class="list">
			<li><a href={`${base}/preprocessors/getting-started`}>Getting Started</a></li>
			<li><a href={`${base}/preprocessors/view-source`}>view-source</a></li>
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
					<li><a href={`${base}/motion/typewriter`}>Typewriter</a></li>
					<li><a href={`${base}/motion/flipboard`}>Flipboard</a></li>
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
			<li><a href={`${base}/others/prism`}>Prism</a></li>
		</ul>
	</Accordion.Item>
</Accordion>
