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

- [use-click-outside](https://svelteui.org/composables/use-click-outside) – Triggers a callback when a user clicks outside of a given element
- [use-clipboard](https://svelteui.org/composables/use-clipboard) - Copies text to the clipboard when DOM element is clicked
- [use-css-variable](https://svelteui.org/composables/use-css-variable) - Update css properties on the fly whenever some of their values change
- [use-download](https://svelteui.org/composables/use-download) - Causes a download to occur with a given Blob object
- [use-focus](https://svelteui.org/composables/use-focus) - Calls focus on a node once mounted into the DOM
- [use-hot-key](https://svelteui.org/composables/use-hot-key) - Calls focus on a node once mounted into the DOM
- [use-lazy](https://svelteui.org/composables/use-lazy) - Lazily attach properties to any DOM element when it is in the window
- [use-long-press](https://svelteui.org/composables/use-long-press) - Creates a longpress event when mousedown is above a duration in milliseconds
- [use-page-leave](https://svelteui.org/composables/use-page-leave) - Prevent current tab from being closed by user
- [use-persistent-tab](https://svelteui.org/composables/use-persistent-tab) - Render an element or component anywhere in the DOM
- [use-portal](https://svelteui.org/composables/use-portal) - Call function when mouse leaves the page
- [use-tab-leave](https://svelteui.org/composables/use-tab-leave) - Call a function when the current tab is switched

### Utils:

- [useOs](https://svelteui.org/composables/use-os)
- [useRafFn](https://svelteui.org/composables/use-raf-fn)
- [useHash](https://svelteui.org/composables/use-hash)
- [useMousePosition](https://svelteui.org/composables/use-mouse-position)
- [useEyeDropper](https://svelteui.org/composables/use-eye-dropper)
- [useRegex](https://svelteui.org/composables/use-regex)
- [useFocusWithin](https://svelteui.org/composables/use-focus-within)
- [useViewport](https://svelteui.org/composables/use-viewport)
- [useBrowserContext](https://svelteui.org/composables/use-browser-context)

## License

All svelteui packages have MIT license. All svelteui dependencies also have MIT license.
