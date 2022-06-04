---
title: 'use-io'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-io/
description: 'Detect when an element enters or leaves the viewport.'
import: "import { io } from '@svelteuidev/composables';"
docs: 'composables/use-io.md'
source: 'svelteui-composables/src/lib/dist/use-io/use-io.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading} from 'components'
</script>

<Heading />

## Usage

With the Intersection Observer API, use-intersection gets information about the intersection of a given element with its scroll container or body element:

<Demo demo={ComposableDemos.useIoDemo.usage} />

## Params

| me                       | Type                   | Default  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required |
| ------------------------ | ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| options.root             | `HTMLElement`          | `window` | The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target.                                                                                                                                                                                                                                                                                                                                                         | `false`  |
| options.rootMargin       | `string`               | `0px`    | Margin around the root element. Values similar to the CSS margin property, e.g. "10px 20px 30px 40px". Can also be a percentage. [See more](#usage-with-rootmargin).                                                                                                                                                                                                                                                                                                        | `false`  |
| options.threshold        | `number` or `number[]` | `0`      | Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run) | `false`  |
| options.unobserveOnEnter | `boolean`              | `false`  | If true, target element stops being observed after the first time it appears in the viewport. Can be used when you want to fire the callback only once.                                                                                                                                                                                                                                                                                                                     | `false`  |

## Events

The use-clipboard action dispatches custom events. Each custom event takes a callback function just like other events.

```ts
on:useclipboard?: (callback: (any) => unknown) => void;
on:change?: (callback: (any) => unknown) => void;
on:enter?: (callback: (any) => unknown) => void;
on:leave?: (callback: (any) => unknown) => void;
on:init?: (callback: (any) => unknown) => void;
```

## Definition

```ts
export function io(node: HTMLElement, options?: Options): ReturnType<Action>;
```
