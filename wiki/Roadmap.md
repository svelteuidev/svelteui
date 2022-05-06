<div id="top" />
# The SvelteUI Roadmap (3 months)

This is the first iteration of a roadmap, so it will only go out for 3 months as of now. This is where we establish topics we want to work on. To make the roadmap even better, we would love to hear from you in issues, discussions, and the dicord.

When we follow our roadmap, we continue to learn, and our opinions on some of the topics listed change. As a result, we may add or remove topics as the project progresses.

We will actively listen to your feedback and adapt our plans if needed.

Legend of annotations:

| Mark         | Description        |
| ------------ | ------------------ |
| bullet       | work not started   |
| check mark   | work completed     |
| :runner:     | in progress work   |
| :muscle:     | stretch goal       |
| :red_circle: | somethings missing |

### Summary

> Stuff will be written here later

## SvelteUI Core

### Components

**v0.6.0**

- [x] Button
- [x] Code
- [x] Loader
- [x] Switch
- [x] Image
- [x] Text
- [x] Title
- [x] Stack
- [x] Badge
- [x] Box
- [x] ActionIcon
- [x] Center
- [x] Fragment
- [x] Group
- [x] Input
- [x] InputWrapper
- [x] NativeSelect
- [x] Space
- [x] Stack
- [x] ThemeIcon
- [ ] Overlay
- [ ] CheckBox
- [ ] SimpleGrid
- [ ] ScrollArea

**v0.6.5**

- [ ] Popper
- [ ] Divider
- [ ] Portal
- [ ] Slider
- [ ] ToolTip
- [ ] Card
- [ ] Modal
- [ ] Grid
- [ ] Skeleton
- [ ] Seo
- [ ] ARIA

### Internals

- [ ] :runner: Transition forwarding
- [ ] Even cooler error UI

### Styling

- [ ] Stitches configuration through `<SvelteUIProvider />`

<a href="#top">back to top</a>

<hr />

## SvelteUI Actions

### Actions

- [x] use-click-outside
- [x] use-clipboard
- [x] use-css-variable
- [x] use-focus
- [x] use-download
- [x] use-page-leave
- [x] use-tab-leave
- [x] use-lazy
- [x] use-long-press
- [x] use-persistent-tab
- [ ] use-hot-key

<a href="#top">back to top</a>

<hr />

## SvelteUI Utilities

### Utilities

- [x] os - detect a user's os.
- [x] rafFn - call function on every `requestAnimationFrame`, with controls of pausing and resuming.
- [x] hash - generate a random hash with a specified prefix.
- [ ] uuid - :runner: generate a random id with validation

### Internals

- [ ] Utilize type guards

<a href="#top">back to top</a>

<hr />

## SvelteUI Motion

### Transitions

- [ ] Typewriter - displays text with a typed effect
- [ ] Flipboard - displays text with a glitch like effect

### Animations

- [ ] Animation Component with predefined animations

<a href="#top">back to top</a>

<hr />

## SvelteUI Prism

### Prism

- [ ] Get Prism component to standard

  - [ ] working copy button
  - [ ] line numbers resize correctly
  - [ ] full line highlighting configuration
  - [ ] ScrollArea component integration

- [ ] Prism Tabs
- [ ] Custom color theming

### Internals

- [ ] Utilize config for cleaner abstraction and more customization

<a href="#top">back to top</a>

<hr />

## SvelteUI Dates :muscle:

### Core

- [ ] Create Month component
  - [ ] Create necessary utils

### Utilities

- [ ] create the date utils needed for the library
