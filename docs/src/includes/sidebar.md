<script>
  import { MainLink } from "components";
  import { Space } from "@svelteuidev/core";
  import { Layout, Input, Stack, Dashboard, LetterCaseToggle, ExclamationTriangle, BoxModel } from "radix-icons-svelte";
	import { Cube, Download, GithubLogo, HamburgerMenu, QuestionMarkCircled, StarFilled } from 'radix-icons-svelte';
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
- ### Theming
  - [SvelteUIProvider](theming/svelteui-provider)
  - [Creating styles](theming/create-styles)
  - [Default Theme](theming/default-theme)
  - [Dark Theme](theming/dark-theme)
  - [Override styles](theming/override)
  - [Server side rendering](theming/ssr)
  - [Utilities](theming/utilities)
- ### SvelteUI Core
  - **<Layout /><Space />Layout**
  - [Container](core/container)
  - [Center](core/center)
  - [SimpleGrid](core/simple-grid)
  - [Space](core/space)
  - [Stack](core/stack)
  - [Group](core/group)
  - **<Input/><Space />Inputs & Actions**
  - [ActionIcon](core/action-icon)
  - [Button](core/button)
  - [Checkbox](core/checkbox)
  - [Input](core/input)
  - [InputWrapper](core/input-wrapper)
  - [NativeSelect](core/native-select)
  - [NumberInput](core/number-input)
  - [Switch](core/switch)
  - **<HamburgerMenu/><Space />Navigation**
  - [Anchor](core/anchor)
  - **<Dashboard/><Space />Data Display**
  - [Badge](core/badge)
  - [Image](core/image)
  - [ThemeIcon](core/theme-icon)
  - **<ExclamationTriangle/><Space />Feedback**
  - [Loader](core/loader)
  - **<Stack/><Space />Overlay**
  - [Affix](core/affix)
  - [Overlay](core/overlay)
  - **<LetterCaseToggle/><Space />Typography**
  - [Code](core/code)
  - [Text](core/text)
  - [Title](core/title)
  - **<BoxModel/><Space />Miscellaneous**
  - [Box](core/box)
  - [BrowserRender](core/browser-render)
  - [Divider](core/divider)
  - [Paper](core/paper)
  - [Popper](core/popper)
  - [ServerRender](core/server-render)
  - [Fragment](core/fragment)
- ### SvelteUI Actions
  - [use-click-outside](actions/use-click-outside)
  - [use-clipboard](actions/use-clipboard)
  - [use-css-variable](actions/use-css-variable)
  - [use-download](actions/use-download)
  - [use-focus](actions/use-focus)
  - [use-lazy](actions/use-lazy)
  - [use-long-press](actions/use-long-press)
  - [use-persistent-tab](actions/use-persistent-tab)
  - [use-portal](actions/use-portal)
  - [use-page-leave](actions/use-page-leave)
  - [use-tab-leave](actions/use-tab-leave)
- ### SvelteUI Utilities
  - [os](utilities/os)
  - [rafFn](utilities/raf-fn)
  - [hash](utilities/hash)
- ### SvelteUI Motion
  - **Transitions**
  - [Typewriter](motion/typewriter)
  - [Flipboard](motion/flipboard)
- ### SvelteUI Others
  - [Prism](others/prism)
