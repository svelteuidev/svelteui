# SvelteUI Composables

## Composables with useful actions and utility functions.

- Package includes functions that are used to build components in @svelteuidev/ scoped packages.
- You can use these functions in your applications with or without other @svelteuidev/ packages.

## Documentation

[See full documentation on the SvelteUI website](https://svelteui.org/)

## Installation

```bash
# With yarn
yarn add @svelteuidev/composables

# With npm
npm i @svelteuidev/composables
```

## Included Composables

### Actions:

- [use-click-outside](https://svelteui.org/actions/use-click-outside) – Triggers a callback when a user clicks outside of a given element
- [use-clipboard](https://svelteui.org/actions/use-clipboard) - Copies text to the clipboard when DOM element is clicked
- [use-css-variable](https://svelteui.org/actions/use-css-variable) - Update css properties on the fly whenever some of their values change
- [use-download](https://svelteui.org/actions/use-download) - Causes a download to occur with a given Blob object
- [use-focus](https://svelteui.org/actions/use-focus) - Calls focus on a node once mounted into the DOM
- [use-hot-key](https://svelteui.org/actions/use-hot-key) - Calls focus on a node once mounted into the DOM
- [use-lazy](https://svelteui.org/actions/use-lazy) - Lazily attach properties to any DOM element when it is in the window
- [use-long-press](https://svelteui.org/actions/use-long-press) - Creates a longpress event when mousedown is above a duration in milliseconds
- [use-page-leave](https://svelteui.org/actions/use-page-leave) - Prevent current tab from being closed by user
- [use-persistent-tab](https://svelteui.org/actions/use-persistent-tab) - Render an element or component anywhere in the DOM
- [use-portal](https://svelteui.org/actions/use-portal) - Call function when mouse leaves the page
- [use-tab-leave](https://svelteui.org/actions/use-tab-leave) - Call a function when the current tab is switched

### Utils:

- [useOs](https://svelteui.org/composables/useOs)
- [useRafFn](https://svelteui.org/composables/useRafFn)
- [useHash](https://svelteui.org/composables/useHash)
- [useMouse](https://svelteui.org/composables/useMouse)
- [useEyeDropper](https://svelteui.org/composables/useEyeDropper)
- [useRegex](https://svelteui.org/composables/useRegex)
- [useFocusWithin](https://svelteui.org/composables/useFocusWithin)
- [useViewport](https://svelteui.org/composables/useViewport)
- [useBrowserContext](https://svelteui.org/composables/useBrowserContext)

## License

All svelteui packages have MIT license. All svelteui dependencies also have MIT license.
