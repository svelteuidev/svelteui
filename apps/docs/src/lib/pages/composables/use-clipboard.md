---
title: 'use-clipboard'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-clipboard/
description: 'Copies text to the clipboard when DOM element is clicked'
importCode: "import { clipboard } from '@svelteuidev/composables';"
docs: 'composables/use-clipboard.md'
source: 'svelteui-composables/src/actions/use-clipboard/use-clipboard.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

With the `use-clipboard` action, text passed into the text param will be copied to the users clipboard.

<Demo demo={ComposableDemos.useClipboardDemo.usage} />

## Params

| Param | Description                                               |
| ----- | --------------------------------------------------------- |
| text  | The text that will be copied when the action is triggered |

## Events

The use-clipboard action dispatches custom events. Each custom event takes a callback function just like other events.

```js
on:useclipboard?: (callback: (any) => unknown) => void;
on:useclipboard-error?: (callback: (any) => unknown) => void;
```

## Definition

```js
export function clipboard(node: HTMLElement, text: string): ReturnType<Action>;
```
