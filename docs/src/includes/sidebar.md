<script>
  import { MainLink, Logo, ChevronDown } from "components";
  import { Space, UnstyledButton } from "@svelteuidev/core";
  import { createEventDispatcher } from 'svelte'
  import { Layout, Input, Stack, Dashboard, LetterCaseToggle, ExclamationTriangle, BoxModel } from "radix-icons-svelte";
	import { Cube, Download, GithubLogo, HamburgerMenu, QuestionMarkCircled, StarFilled, LightningBolt, Archive } from 'radix-icons-svelte';

  const dispatch = createEventDispatcher();

  const sidebar = [
    { expand: false },
    { expand: false },
    { expand: false },
    { expand: false },
    { expand: false },
    { expand: false },
  ]
  const override = {
    display: 'flex',
    alignItems: 'center',
  }

  function toggleSidebar(index) {
    sidebar[index].expand = !sidebar[index].expand;
    dispatch('toggleSidebar', { index, expand: sidebar[index].expand });
  }
</script>

- <MainLink href='introduction'><Cube slot='icon' size={20} />Introduction</MainLink>
- <MainLink color='red' href='installation'><Download slot='icon' size={20} />Installation</MainLink>
- <MainLink color='green' href='basics'><StarFilled slot='icon' size={20} />Learn The Basics</MainLink>
- <MainLink color='dark' href='contributing'><GithubLogo slot='icon' size={20} />Contributing</MainLink>
- <MainLink color={null} href='https://svelteuidev.github.io/svelteui-collections/'><Logo slot='icon' size={30} />SvelteUI Collections</MainLink>
- <MainLink color='indigo' href='faq'><QuestionMarkCircled slot='icon' size={20} />FAQ</MainLink>

<hr />

- ### <UnstyledButton {override} on:click={() => toggleSidebar(0)}><ChevronDown expanded={sidebar[0].expand} /><Space w='xs'/>Changelog</UnstyledButton>
  {#if sidebar[0].expand}
  - [Version 0.5.0](changelog/v0-5-0)
  - [Version 0.5.5](changelog/v0-5-5)
  - [Version 0.6.0](changelog/v0-6-0)
  - [Version 0.6.5](changelog/v0-6-5)
    {/if}
- ### <UnstyledButton {override} on:click={() => toggleSidebar(1)}><ChevronDown expanded={sidebar[1].expand} /><Space w='xs'/>Theming</UnstyledButton>
  {#if sidebar[1].expand}
  - [SvelteUIProvider](theming/svelteui-provider)
  - [Creating styles](theming/create-styles)
  - [Default Theme](theming/default-theme)
  - [Dark Theme](theming/dark-theme)
  - [Override styles](theming/override)
  - [Server side rendering](theming/ssr)
  - [Utilities](theming/utilities)
    {/if}
- ### <UnstyledButton {override} on:click={() => toggleSidebar(2)}><ChevronDown expanded={sidebar[2].expand} /><Space w='xs'/>SvelteUI Core</UnstyledButton>
  {#if sidebar[2].expand}
- **<Layout /><Space w="md" />Layout**
  - [AppShell](core/app-shell)
  - [Container](core/container)
  - [Center](core/center)
  - [Group](core/group)
  - [SimpleGrid](core/simple-grid)
  - [Space](core/space)
  - [Stack](core/stack)
- **<Input/><Space w="md" />Inputs & Actions**
  - [ActionIcon](core/action-icon)
  - [Button](core/button)
  - [Checkbox](core/checkbox)
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
- **<Dashboard/><Space w="md" />Data Display**
  - [Badge](core/badge)
  - [Card](core/card)
  - [Image](core/image)
  - [Kbd](core/kbd)
  - [ThemeIcon](core/theme-icon)
- **<ExclamationTriangle/><Space w="md" />Feedback**
  - [Alert](core/alert)
  - [Loader](core/loader)
  - [Notification](core/notification)
  - [Skeleton](core/skeleton)
- **<Stack/><Space w="md" />Overlay**
  - [Affix](core/affix)
  - [Overlay](core/overlay)
  - [Tooltip](core/tooltip)
- **<LetterCaseToggle/><Space w="md" />Typography**
  - [Code](core/code)
  - [Text](core/text)
  - [Title](core/title)
  - [TypographyProvider](core/typography-provider)
- **<BoxModel/><Space w="md" />Miscellaneous**
  - [Box](core/box)
  - [BrowserRender](core/browser-render)
  - [Divider](core/divider)
  - [ObserverRender](core/observer-render)
  - [Paper](core/paper)
  - [Popper](core/popper)
  - [Portal](core/portal)
  - [ServerRender](core/server-render)
  - [Fragment](core/fragment)
    {/if}
- ### <UnstyledButton {override} on:click={() => toggleSidebar(3)}><ChevronDown expanded={sidebar[3].expand} /><Space w='xs'/>SvelteUI Composables</UnstyledButton>
  {#if sidebar[3].expand}
- **<LightningBolt/><Space w="md" />Actions**
  - [use-click-outside](composables/use-click-outside)
  - [use-clipboard](composables/use-clipboard)
  - [use-css-variable](composables/use-css-variable)
  - [use-download](composables/use-download)
  - [use-focus](composables/use-focus)
  - [use-hot-key](composables/use-hot-key)
  - [use-io](composables/use-io)
  - [use-lazy](composables/use-lazy)
  - [use-lock-scroll](composables/use-lock-scroll)
  - [use-long-press](composables/use-long-press)
  - [use-persistent-tab](composables/use-persistent-tab)
  - [use-portal](composables/use-portal)
  - [use-page-leave](composables/use-page-leave)
  - [use-tab-leave](composables/use-tab-leave)
- **<Archive/><Space w="md" />Utilities**
  - [use-browser-context](composables/use-browser-context)
  - [use-eye-dropper](composables/use-eye-dropper)
  - [use-focus-within](composables/use-focus-within)
  - [use-hash](composables/use-hash)
  - [use-mouse-position](composables/use-mouse-position)
  - [use-os](composables/use-os)
  - [use-raf-fn](composables/use-raf-fn)
  - [use-viewport-size](composables/use-viewport-size)
    {/if}
- ### <UnstyledButton {override} on:click={() => toggleSidebar(4)}><ChevronDown expanded={sidebar[4].expand} /><Space w='xs'/>SvelteUI Motion</UnstyledButton>
  {#if sidebar[4].expand}
- **Transitions**
  - [Typewriter](motion/typewriter)
  - [Flipboard](motion/flipboard)
    {/if}
- ### <UnstyledButton {override} on:click={() => toggleSidebar(5)}><ChevronDown expanded={sidebar[5].expand} /><Space w='xs'/>Other Packages</UnstyledButton>
  {#if sidebar[5].expand}
  - [Prism](others/prism)
    {/if}
