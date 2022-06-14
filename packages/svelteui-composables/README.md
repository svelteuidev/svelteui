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

- [useOs](https://svelteui.org/composables/use-os) - Get the user's os
- [useRafFn](https://svelteui.org/composables/use-raf-fn) - Call a function on every requestAnimationFrame
- [useHash](https://svelteui.org/composables/use-hash) - Generates a random hash with a specified prefix.
- [useMousePosition](https://svelteui.org/composables/use-mouse-position) - Get mouse position relative to viewport or given element
- [useEyeDropper](https://svelteui.org/composables/use-eye-dropper) - Get access to a reactive EyeDropper API.
- [useRegex](https://svelteui.org/composables/use-regex) - Get common regex patterns, add your own, or test them.
- [useFocusWithin](https://svelteui.org/composables/use-focus-within) - Detect if any element within has focus.
- [useViewportSize](https://svelteui.org/composables/use-viewport-size) - Get viewport width and height.
- [useBrowserContext](https://svelteui.org/composables/use-browser-context) - Get access to the reactive browser location API.

## License

All svelteui packages have MIT license. All svelteui dependencies also have MIT license.
