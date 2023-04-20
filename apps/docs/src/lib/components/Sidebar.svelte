<script>
  // @ts-nocheck
  import { MainLink, NavigationTitle } from "$lib/components";
  import { Space } from "@svelteuidev/core";
  import { createEventDispatcher } from 'svelte'
  import { Layout, Input, Stack, Dashboard, LetterCaseToggle, ExclamationTriangle, BoxModel } from "radix-icons-svelte";
	import { Cube, Download, GithubLogo, HamburgerMenu, QuestionMarkCircled, StarFilled, LightningBolt, Archive } from 'radix-icons-svelte';

  const dispatch = createEventDispatcher();

  export let sidebar

  function toggleSidebar(index) {
    sidebar[index].expand = !sidebar[index].expand;
    dispatch('toggleSidebar', { index, expand: sidebar[index].expand });
  }
</script>

<ul>
  <li>
    <MainLink href='/introduction'><Cube slot='icon' size={20} />Introduction</MainLink>
  </li>
  <li>
    <MainLink color='red' href='/installation'><Download slot='icon' size={20} />Installation</MainLink>
  </li>
  <li>
    <MainLink color='green' href='/basics'><StarFilled slot='icon' size={20} />Learn The Basics</MainLink>
  </li>
  <li>
    <MainLink color='dark' href='/contributing'><GithubLogo slot='icon' size={20} />Contributing</MainLink>
  </li>
    <!-- - <MainLink color={null} href={suiCollections}><Logo slot='icon' size={30} />SvelteUI Collections</MainLink> -->
  <li>
    <MainLink color='indigo' href='/faq'><QuestionMarkCircled slot='icon' size={20} />FAQ</MainLink>
  </li>

</ul>

<hr />

<ul>
  <li>
    <h3><NavigationTitle expanded={sidebar[0].expand} on:click={() => toggleSidebar(0)}>changelog</NavigationTitle></h3>
    {#if sidebar[0].expand}
      <ul>
        <li><a href="/changelog/v0-11-0">Version 0.11.0</a></li>
        <li><a href="/changelog/v0-10-0">Version 0.10.0</a></li>
        <li><a href="/changelog/v0-7-0">Version 0.7.0</a></li>
        <li><a href="/changelog/v0-6-5">Version 0.6.5</a></li>
        <li><a href="/changelog/v0-6-0">Version 0.6.0</a></li>
        <li><a href="/changelog/v0-5-5">Version 0.5.5</a></li>
        <li><a href="/changelog/v0-5-0">Version 0.5.0</a></li>
      </ul>
    {/if}
  </li>

  <li>
    <h3><NavigationTitle expanded={sidebar[1].expand} on:click={() => toggleSidebar(1)}>theming</NavigationTitle></h3>
    {#if sidebar[1].expand}
      <ul>
        <li><a href="/theming/svelteui-provider">SvelteUIProvider</a></li>
        <li><a href="/theming/create-styles">Creating styles</a></li>
        <li><a href="/theming/default-theme">Default Theme</a></li>
        <li><a href="/theming/dark-theme">Dark Theme</a></li>
        <li><a href="/theming/override">Override styles</a></li>
        <li><a href="/theming/ssr">Server side rendering</a></li>
        <li><a href="/theming/utilities">Utilities</a></li>
      </ul>
    {/if}
  </li>

  <li>
    <h3><NavigationTitle expanded={sidebar[2].expand} on:click={() => toggleSidebar(2)}>svelteui core (components)</NavigationTitle></h3>
    {#if sidebar[2].expand}
      <ul>
        <li>
          <strong><Layout /><Space w="md" />Layout</strong>
          <ul>
            <li><a href="/core/app-shell">AppShell</a></li>
            <li><a href="/core/container">Container</a></li>
            <li><a href="/core/center">Center</a></li>
            <li><a href="/core/grid">Grid</a></li>
            <li><a href="/core/group">Group</a></li>
            <li><a href="/core/media-query">MediaQuery</a></li>
            <li><a href="/core/simple-grid">SimpleGrid</a></li>
            <li><a href="/core/space">Space</a></li>
            <li><a href="/core/stack">Stack</a></li>
          </ul>
        </li>
        <li>
          <strong><Input/><Space w="md" />Inputs & Actions</strong>
          <ul>
            <li><a href="/core/action-icon">ActionIcon</a></li>
            <li><a href="/core/button">Button</a></li>
            <li><a href="/core/checkbox">Checkbox</a></li>
            <li><a href="/core/chip">Chip</a></li>
            <li><a href="/core/input">Input</a></li>
            <li><a href="/core/input-wrapper">InputWrapper</a></li>
            <li><a href="/core/native-select">NativeSelect</a></li>
            <li><a href="/core/number-input">NumberInput</a></li>
            <li><a href="/core/radio">Radio</a></li>
            <li><a href="/core/switch">Switch</a></li>
            <li><a href="/core/text-input">TextInput</a></li>
            <li><a href="/core/unstyled-button">UnstyledButton</a></li>
          </ul>
        </li>
        <li>
          <strong><HamburgerMenu/><Space w="md" />Navigation</strong>
          <ul>
            <li><a href="/core/anchor">Anchor</a></li>
            <li><a href="/core/breadcrumbs">Breadcrumbs</a></li>
            <li><a href="/core/burger">Burger</a></li>
            <li><a href="/core/seo">Seo</a></li>
            <li><a href="/core/tabs">Tabs</a></li>
          </ul>
        </li>
        <li>
          <strong><Dashboard/><Space w="md" />Data Display</strong>
          <ul>
            <li><a href="/core/badge">Badge</a></li>
            <li><a href="/core/card">Card</a></li>
            <li><a href="/core/image">Image</a></li>
            <li><a href="/core/kbd">Kbd</a></li>
            <li><a href="/core/theme-icon">ThemeIcon</a></li>
            <li><a href="/core/timeline">Timeline</a></li>
          </ul>
        </li>
        <li>
          <strong><ExclamationTriangle/><Space w="md" />Feedback</strong>
          <ul>
            <li><a href="/core/alert">Alert</a></li>
            <li><a href="/core/loader">Loader</a></li>
            <li><a href="/core/notification">Notification</a></li>
            <li><a href="/core/progress">Progress</a></li>
            <li><a href="/core/skeleton">Skeleton</a></li>
          </ul>
        </li>
        <li>
          <strong><Stack/><Space w="md" />Overlay</strong>
          <ul>
            <li><a href="/core/affix">Affix</a></li>
            <li><a href="/core/menu">Menu</a></li>
            <li><a href="/core/modal">Modal</a></li>
            <li><a href="/core/overlay">Overlay</a></li>
            <li><a href="/core/tooltip">Tooltip</a></li>
          </ul>
        </li>
        <li>
          <strong><LetterCaseToggle/><Space w="md" />Typography</strong>
          <ul>
            <li><a href="/core/code">Code</a></li>
            <li><a href="/core/text">Text</a></li>
            <li><a href="/core/title">Title</a></li>
            <li><a href="/core/typography-provider">TypographyProvider</a></li>
          </ul>
        </li>
        <li>
          <strong><BoxModel/><Space w="md" />Miscellaneous</strong>
          <ul>
            <li><a href="/core/box">Box</a></li>
            <li><a href="/core/divider">Divider</a></li>
            <li><a href="/core/observer-render">ObserverRender</a></li>
            <li><a href="/core/paper">Paper</a></li>
            <li><a href="/core/popper">Popper</a></li>
            <li><a href="/core/portal">Portal</a></li>
          </ul>
        </li>
      </ul>
    {/if}
  </li>

  <li>
    <h3><NavigationTitle expanded={sidebar[3].expand} on:click={() => toggleSidebar(3)}>svelteui composables (svelte actions)</NavigationTitle></h3>
    {#if sidebar[3].expand}
      <ul>
        <li>
          <strong><LightningBolt/><Space w="md" />Actions</strong>
          <ul>
            <li><a href="/composables/use-click-outside">use-click-outside</a></li>
            <li><a href="/composables/use-clipboard">use-clipboard</a></li>
            <li><a href="/composables/use-css-variable">use-css-variable</a></li>
            <li><a href="/composables/use-download">use-download</a></li>
            <li><a href="/composables/use-focus">use-focus</a></li>
            <li><a href="/composables/use-focus-trap">use-focus-trap</a></li>
            <li><a href="/composables/use-hot-key">use-hot-key</a></li>
            <li><a href="/composables/use-io">use-io</a></li>
            <li><a href="/composables/use-lazy">use-lazy</a></li>
            <li><a href="/composables/use-lock-scroll">use-lock-scroll</a></li>
            <li><a href="/composables/use-long-press">use-long-press</a></li>
            <li><a href="/composables/use-move">use-move</a></li>
            <li><a href="/composables/use-persistent-tab">use-persistent-tab</a></li>
            <li><a href="/composables/use-portal">use-portal</a></li>
            <li><a href="/composables/use-page-leave">use-page-leave</a></li>
            <li><a href="/composables/use-tab-leave">use-tab-leave</a></li>
          </ul>
        </li>
        <li>
          <strong><Archive/><Space w="md" />Utilities</strong>
          <ul>
            <li><a href="/composables/use-browser-context">use-browser-context</a></li>
            <li><a href="/composables/use-debounce">use-debounce</a></li>
            <li><a href="/composables/use-element-size">use-element-size</a></li>
            <li><a href="/composables/use-eye-dropper">use-eye-dropper</a></li>
            <li><a href="/composables/use-focus-return">use-focus-return</a></li>
            <li><a href="/composables/use-focus-within">use-focus-within</a></li>
            <li><a href="/composables/use-hash">use-hash</a></li>
            <li><a href="/composables/use-id">use-id</a></li>
            <li><a href="/composables/use-mouse-position">use-mouse-position</a></li>
            <li><a href="/composables/use-os">use-os</a></li>
            <li><a href="/composables/use-raf-fn">use-raf-fn</a></li>
            <li><a href="/composables/use-throttle">use-throttle</a></li>
            <li><a href="/composables/use-viewport-size">use-viewport-size</a></li>
            <li><a href="/composables/use-web-worker">use-web-worker</a></li>
          </ul>
        </li>
      </ul>
    {/if}
  </li>

  <li>
    <h3><NavigationTitle expanded={sidebar[4].expand} on:click={() => toggleSidebar(4)}>svelteui dates</NavigationTitle></h3>
    {#if sidebar[4].expand}
      <ul>
        <li><a href="/dates/getting-started-dates">Getting Started</a></li>
        <!-- - [Calendar](dates/calendar) -->
        <li><a href="/dates/month">Month</a></li>
      </ul>
    {/if}
  </li>
  <li>
    <h3><NavigationTitle expanded={sidebar[5].expand} on:click={() => toggleSidebar(5)}>svelteui preprocessors</NavigationTitle></h3>
    {#if sidebar[5].expand}
      <ul>
        <li><a href="/preprocessors/getting-started-preprocessors">Getting Started</a></li>
        <li><a href="/preprocessors/view-source">view-source</a></li>
      </ul>
    {/if}
  </li>
  <li>
    <h3><NavigationTitle expanded={sidebar[6].expand} on:click={() => toggleSidebar(6)}>svelteui motion</NavigationTitle></h3>
    {#if sidebar[6].expand}
      <ul>
        <li>
          <strong>Transitions</strong>
          <ul>
            <li><a href="/motion/typewriter">Typewriter</a></li>
            <li><a href="/motion/flipboard">Flipboard</a></li>
          </ul>
        </li>
      </ul>
    {/if}
  </li>

  <li>
    <h3><NavigationTitle expanded={sidebar[7].expand} on:click={() => toggleSidebar(7)}>other packages</NavigationTitle></h3>
    {#if sidebar[7].expand}
      <ul>
        <li><a href="/others/prism">Prism</a></li>
      </ul>
    {/if}
  </li>
</ul>

<style>
  * {
    font-family: var(--svelteui-fonts-standard) !important;
  }
</style>
