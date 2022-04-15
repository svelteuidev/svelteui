<script context="module">
  export const prerender = true;

  export const load = createKitDocsLoader({ sidebar: '/docs' });
</script>

<script>
  import '@svelteness/kit-docs/client/polyfills/index.js';
  import '@svelteness/kit-docs/client/styles/normalize.css';
  import '@svelteness/kit-docs/client/styles/fonts.css';
  import '@svelteness/kit-docs/client/styles/theme.css';
  import '@svelteness/kit-docs/client/styles/vars.css';
  import { sidebar } from '$lib/internal'
  import { Text, SvelteUIProvider } from '@svelteuidev/core'
  import {
    KitDocs,
    KitDocsLayout,
    createKitDocsLoader,
    createSidebarContext,
    Chip,
    SocialLink,
    colorScheme
  } from '@svelteness/kit-docs';

  /** @type {import('@svelteness/kit-docs').MarkdownMeta} */
  export let meta;

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [{ title: 'Documentation', slug: '/docs', match: /\/docs/ }],
  };

  const { activeCategory } = createSidebarContext(sidebar);
</script>

<svelte:head>
  <title>{$activeCategory}: {meta.title} | SvelteUI</title>
  <meta name="description" content={meta.description} />
</svelte:head>


<SvelteUIProvider ssr />
<KitDocs {meta}>
  <KitDocsLayout {navbar} {sidebar}>
    <Text
				override={{ display: 'flex', gap: '.25rem' }}
				underline={false}
				variant="link"
				align="center"
				root="a"
				href="/"
        slot='navbar-left'
			>
				<Text size={25} color='blue'>SvelteUI</Text>
				<Text size={25} color='dimmed'>v0.5.5</Text>
        {#if $colorScheme === 'dark'}
          <Chip class='text-white'>BETA</Chip>
        {:else}
          <Chip class='text-black'>BETA</Chip>
        {/if}
  </Text>

      <div slot="navbar-right-alt" class="flex" style="gap: 1rem;">
          <SocialLink class='' type="discord" href="#" />
          <SocialLink class='' type='gitHub' href="#" />
      </div>
    <slot />
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand-rgb: 28, 126, 214;
  }

  :global(:root.dark) {
    --kd-color-brand-rgb: 34, 139, 230;
    --kd-color-gray-body: 26, 27, 30;
  }
</style>
