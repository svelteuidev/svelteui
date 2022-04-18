<script context="module">
	export const prerender = true;

	export const load = createKitDocsLoader({
		sidebar: {
			'/': null,
			'/docs': '/docs'
		}
	});
</script>

<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/theme.css';
	import '@svelteness/kit-docs/client/styles/vars.css';
	import { page } from '$app/stores';
	import { sidebar } from '$lib/internal';
	import { Text, SvelteUIProvider } from '@svelteuidev/core';
	import SvelteUILogo from '$img/Logo.png';

	import {
		KitDocs,
		KitDocsLayout,
		createKitDocsLoader,
		createSidebarContext,
		Chip,
		SocialLink,
		colorScheme
	} from '@svelteness/kit-docs';
	import socialCardLarge from '$img/Banner.png';

	/** @type {import('@svelteness/kit-docs').MarkdownMeta | null} */
	export let meta = null;

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }]
	};

	const { activeCategory } = createSidebarContext(sidebar);
</script>

<svelte:head>
	{#if meta?.title}
		<title>{$activeCategory ? `${$activeCategory}: ` : ''}{meta.title} | KitDocs</title>
	{/if}
	{#if meta?.description}
		<meta name="description" content={meta?.description ?? 'meta not found'} />
	{/if}
	<meta name="twitter:description" content={meta?.description ?? 'meta not found'} />
	<meta name="og:description" content={meta?.description ?? 'meta not found'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Brisklemonaid" />
	<meta name="twitter:image" content={`https://svelteui-docs.vercel.app${socialCardLarge}`} />
	<meta name="twitter:creator" content="@Brisklemonaid" />
	<meta property="og:url" content={`https://svelteui-docs.vercel.app${$page.url.pathname}`} />
	<meta property="og:type" content="article" />
	<meta name="og:image" content={`https://svelteui-docs.vercel.app${socialCardLarge}`} />
</svelte:head>

<SvelteUIProvider
	ssr
	themeObserver={$colorScheme === 'dark' || $colorScheme === 'system' ? 'dark' : 'light'}
>
	<KitDocs {meta}>
		<KitDocsLayout {navbar} {sidebar}>
			<div class="logo" slot="navbar-left">
				<Text
					underline={false}
					variant="link"
					root="a"
					href="/"
					override={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
				>
					<img width="25%" src={SvelteUILogo} alt="Logo" />
					<Chip class={$colorScheme === 'light' ? 'text-black' : 'text-black'}>BETA</Chip>
				</Text>
			</div>

			<div slot="navbar-right-alt" class="flex" style="gap: 1rem;">
				<SocialLink class="" type="discord" href="https://discord.gg/2J2xmzCS79" />
				<SocialLink class="" type="gitHub" href="https://github.com/Brisklemonade/svelteui" />
			</div>
			<slot />
		</KitDocsLayout>
	</KitDocs>
</SvelteUIProvider>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 28, 126, 214;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 34, 139, 230;
		--kd-color-gray-body: 26, 27, 30;
	}

	:global(.use-css-variable) {
		color: var(--titleColor);
	}
</style>
