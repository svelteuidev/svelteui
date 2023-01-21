<script>
  import { MainLink, Logo, ChevronDown, NavigationTitle } from "components";
  import { Space, UnstyledButton } from "@svelteuidev/core";
  import { createEventDispatcher } from 'svelte'
  import { Layout, Input, Stack, Dashboard, LetterCaseToggle, ExclamationTriangle, BoxModel } from "radix-icons-svelte";
	import { Cube, Download, GithubLogo, HamburgerMenu, QuestionMarkCircled, StarFilled, LightningBolt, Archive } from 'radix-icons-svelte';

  const dispatch = createEventDispatcher();
  const suiCollections = 'https://svelteuidev.github.io/svelteui-collections/'

  const sidebar = [
    { id: 1, expand: false },
    { id: 2, expand: false },
    { id: 3, expand: false },
    { id: 4, expand: false },
    { id: 5, expand: false },
    { id: 6, expand: false },
    { id: 7, expand: false },
    { id: 8, expand: false },
  ]

  function toggleSidebar(index) {
    sidebar[index].expand = !sidebar[index].expand;
    dispatch('toggleSidebar', { index, expand: sidebar[index].expand });
  }
</script>

- <MainLink href='introduction'><Cube slot='icon' size={20} />Introduction</MainLink>
- <MainLink color='red' href='installation'><Download slot='icon' size={20} />Installation</MainLink>
- <MainLink color='green' href='basics'><StarFilled slot='icon' size={20} />Learn The Basics</MainLink>
- <MainLink color='dark' href='contributing'><GithubLogo slot='icon' size={20} />Contributing</MainLink>
<!-- - <MainLink color={null} href={suiCollections}><Logo slot='icon' size={30} />SvelteUI Collections</MainLink> -->
- <MainLink color='indigo' href='faq'><QuestionMarkCircled slot='icon' size={20} />FAQ</MainLink>

<hr />

- ### <NavigationTitle expanded={sidebar[0].expand} on:click={() => toggleSidebar(0)}>changelog</NavigationTitle>
  {#if sidebar[0].expand}
  - [Version 0.7.0](changelog/v0-7-0)
  - [Version 0.6.5](changelog/v0-6-5)
  - [Version 0.6.0](changelog/v0-6-0)
  - [Version 0.5.5](changelog/v0-5-5)
  - [Version 0.5.0](changelog/v0-5-0)
    {/if}
- ### <NavigationTitle expanded={sidebar[1].expand} on:click={() => toggleSidebar(1)}>theming</NavigationTitle>
  {#if sidebar[1].expand}
  - [SvelteUIProvider](theming/svelteui-provider)
  - [Creating styles](theming/create-styles)
  - [Default Theme](theming/default-theme)
  - [Dark Theme](theming/dark-theme)
  - [Override styles](theming/override)
  - [Server side rendering](theming/ssr)
  - [Utilities](theming/utilities)
    {/if}
- ### <NavigationTitle expanded={sidebar[2].expand} on:click={() => toggleSidebar(2)}>svelteui core (components)</NavigationTitle>
  {#if sidebar[2].expand}
- **<Layout /><Space w="md" />Layout**
  - [AppShell](core/app-shell)
  - [Container](core/container)
  - [Center](core/center)
  - [Grid](core/grid)
  - [Group](core/group)
  - [MediaQuery](core/media-query)
  - [SimpleGrid](core/simple-grid)
  - [Space](core/space)
  - [Stack](core/stack)
- **<Input/><Space w="md" />Inputs & Actions**
  - [ActionIcon](core/action-icon)
  - [Button](core/button)
  - [Checkbox](core/checkbox)
  - [Chip](core/chip)
  - [Input](core/input)
  - [InputWrapper](core/input-wrapper)
  - [NativeSelect](core/native-select)
  - [NumberInput](core/number-input)
  - [Switch](core/switch)
  - [TextInput](core/text-input)
  - [UnstyledButton](core/unstyled-button)
- **<HamburgerMenu/><Space w="md" />Navigation**
  - [Anchor](core/anchor)
  - [Burger](core/burger)
  - [Seo](core/seo)
  - [Tabs](core/tabs)
- **<Dashboard/><Space w="md" />Data Display**
  - [Badge](core/badge)
  - [Card](core/card)
  - [Image](core/image)
  - [Kbd](core/kbd)
  - [ThemeIcon](core/theme-icon)
  - [Timeline](core/timeline)
- **<ExclamationTriangle/><Space w="md" />Feedback**
  - [Alert](core/alert)
  - [Loader](core/loader)
    - [Notification](core/notification)
    - [Progress](core/progress)
  - [Skeleton](core/skeleton)
- **<Stack/><Space w="md" />Overlay**
  - [Affix](core/affix)
  - [Menu](core/menu)
  - [Modal](core/modal)
  - [Overlay](core/overlay)
  - [Tooltip](core/tooltip)
- **<LetterCaseToggle/><Space w="md" />Typography**
  - [Code](core/code)
  - [Text](core/text)
  - [Title](core/title)
  - [TypographyProvider](core/typography-provider)
- **<BoxModel/><Space w="md" />Miscellaneous**
  - [Box](core/box)
  - [Divider](core/divider)
  - [ObserverRender](core/observer-render)
  - [Paper](core/paper)
  - [Popper](core/popper)
  - [Portal](core/portal)
    {/if}
- ### <NavigationTitle expanded={sidebar[3].expand} on:click={() => toggleSidebar(3)}>svelteui composables (svelte actions)</NavigationTitle>
  {#if sidebar[3].expand}
- **<LightningBolt/><Space w="md" />Actions**
  - [use-click-outside](composables/use-click-outside)
  - [use-clipboard](composables/use-clipboard)
  - [use-css-variable](composables/use-css-variable)
  - [use-download](composables/use-download)
  - [use-focus](composables/use-focus)
  - [use-focus-trap](composables/use-focus-trap)
  - [use-hot-key](composables/use-hot-key)
  - [use-io](composables/use-io)
  - [use-lazy](composables/use-lazy)
  - [use-lock-scroll](composables/use-lock-scroll)
  - [use-long-press](composables/use-long-press)
  - [use-move](composables/use-move)
  - [use-persistent-tab](composables/use-persistent-tab)
  - [use-portal](composables/use-portal)
  - [use-page-leave](composables/use-page-leave)
  - [use-tab-leave](composables/use-tab-leave)
- **<Archive/><Space w="md" />Utilities**
  - [use-browser-context](composables/use-browser-context)
  - [use-debounce](composables/use-debounce)
  - [use-element-size](composables/use-element-size)
  - [use-eye-dropper](composables/use-eye-dropper)
  - [use-focus-within](composables/use-focus-within)
  - [use-hash](composables/use-hash)
  - [use-id](composables/use-id)
  - [use-mouse-position](composables/use-mouse-position)
  - [use-os](composables/use-os)
  - [use-raf-fn](composables/use-raf-fn)
  - [use-throttle](composables/use-throttle)
  - [use-viewport-size](composables/use-viewport-size)
  - [use-web-worker](composables/use-web-worker)
    {/if}
- ### <NavigationTitle expanded={sidebar[4].expand} on:click={() => toggleSidebar(4)}>svelteui dates</NavigationTitle>
  {#if sidebar[4].expand}
  - [Getting Started](dates/getting-started-dates)
  <!-- - [Calendar](dates/calendar) -->
  - [Month](dates/month)
    {/if}
- ### <NavigationTitle expanded={sidebar[5].expand} on:click={() => toggleSidebar(5)}>svelteui preprocessors</NavigationTitle>
  {#if sidebar[5].expand}
  - [Getting Started](preprocessors/getting-started-preprocessors)
  - [view-source](preprocessors/view-source)
    {/if}
- ### <NavigationTitle expanded={sidebar[6].expand} on:click={() => toggleSidebar(6)}>svelteui motion</NavigationTitle>
  {#if sidebar[6].expand}
- **Transitions**
  - [Typewriter](motion/typewriter)
  - [Flipboard](motion/flipboard)
    {/if}
- ### <NavigationTitle expanded={sidebar[7].expand} on:click={() => toggleSidebar(7)}>other packages</NavigationTitle>
  {#if sidebar[7].expand}
  - [Prism](others/prism)
    {/if}

<style>
  * {
    font-family: var(--svelteui-fonts-standard) !important;
  }
</style>
