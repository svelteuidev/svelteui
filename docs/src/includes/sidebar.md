<script>
  import { MainLink } from "components";
  import { Space } from "@svelteuidev/core";
  import { Layout, Input, Stack, Dashboard, LetterCaseToggle, ExclamationTriangle, BoxModel } from "radix-icons-svelte";
	import { Cube, Download, GithubLogo, HamburgerMenu, QuestionMarkCircled, StarFilled, LightningBolt, Archive } from 'radix-icons-svelte';
</script>

- <MainLink href='introduction'><Cube slot='icon' size={20} />Introduction</MainLink>
- <MainLink color='red' href='installation'><Download slot='icon' size={20} />Installation</MainLink>
- <MainLink color='green' href='basics'><StarFilled slot='icon' size={20} />Learn The Basics</MainLink>
- <MainLink color='dark' href='contributing'><GithubLogo slot='icon' size={20} />Contributing</MainLink>
- <MainLink color='indigo' href='faq'><QuestionMarkCircled slot='icon' size={20} />FAQ</MainLink>

<hr />

- ### Changelog
  - [Version 0.5.0](changelog/v0-5-0)
  - [Version 0.5.5](changelog/v0-5-5)
  - [Version 0.6.0](changelog/v0-6-0)
  - [Version 0.6.5](changelog/v0-6-5)
- ### Theming
  - [SvelteUIProvider](theming/svelteui-provider)
  - [Creating styles](theming/create-styles)
  - [Default Theme](theming/default-theme)
  - [Dark Theme](theming/dark-theme)
  - [Override styles](theming/override)
  - [Server side rendering](theming/ssr)
  - [Utilities](theming/utilities)
- ### SvelteUI Core
  - **<Layout /><Space w="md" />Layout**
  - [Container](core/container)
  - [Center](core/center)
  - [SimpleGrid](core/simple-grid)
  - [Space](core/space)
  - [Stack](core/stack)
  - [Group](core/group)
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
  - **<Dashboard/><Space w="md" />Data Display**
  - [Badge](core/badge)
  - [Card](core/card)
  - [Image](core/image)
  - [Kbd](core/kbd)
  - [ThemeIcon](core/theme-icon)
  - **<ExclamationTriangle/><Space w="md" />Feedback**
  - [Loader](core/loader)
  - [Skeleton](core/skeleton)
  - **<Stack/><Space w="md" />Overlay**
  - [Affix](core/affix)
  - [Overlay](core/overlay)
  - [Tooltip](core/tooltip)
  - **<LetterCaseToggle/><Space w="md" />Typography**
  - [Code](core/code)
  - [Text](core/text)
  - [Title](core/title)
  - **<BoxModel/><Space w="md" />Miscellaneous**
  - [Box](core/box)
  - [BrowserRender](core/browser-render)
  - [Divider](core/divider)
  - [Paper](core/paper)
  - [Popper](core/popper)
  - [Portal](core/portal)
  - [ServerRender](core/server-render)
  - [Fragment](core/fragment)
- ### SvelteUI Composables
  - **<LightningBolt/><Space w="md" />Actions**
  - [use-click-outside](composables/use-click-outside)
  - [use-clipboard](composables/use-clipboard)
  - [use-css-variable](composables/use-css-variable)
  - [use-download](composables/use-download)
  - [use-focus](composables/use-focus)
  - [use-hot-key](composables/use-hot-key)
  - [use-lazy](composables/use-lazy)
  - [use-long-press](composables/use-long-press)
  - [use-persistent-tab](composables/use-persistent-tab)
  - [use-portal](composables/use-portal)
  - [use-page-leave](composables/use-page-leave)
  - [use-tab-leave](composables/use-tab-leave)
  - **<Archive/><Space w="md" />Utilities**
  - [use-os](composables/use-os)
  - [use-raf-fn](composables/use-raf-fn)
  - [use-hash](composables/use-hash)
- ### SvelteUI Motion
  - **Transitions**
  - [Typewriter](motion/typewriter)
  - [Flipboard](motion/flipboard)
- ### Other Packages
  - [Prism](others/prism)
