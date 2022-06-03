---
title: use-hot-key
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-hot-key/
description: 'Listen for key combinations/shortcuts on document or a given element.'
import: "import { hotkey } from '@svelteuidev/composables';"
source: 'svelteui-composables/src/lib/dist/actions/use-hot-key/use-hot-key.ts'
docs: 'composables/use-hot-key.md'
---

<script>
    import { ComposableDemos, Demo } from "@svelteuidev/demos";
    import { Heading } from 'components';
</script>

<Heading />

## Usage

`use-hot-key` accepts an array of hotkeys and handler tuples:

- hotkey - hotkey string e.g. ctrl+E, shift+alt+L, mod+S
- handler - event handler called when given combination was pressed

<Demo demo={ComposableDemos.usehotkeyDemo.usage} />

## Targeting elements

`use-hot-key` can only work with the document element; if you need to support other elements then you'll need to create your own event listener. The package includes a getHotkeyHandler function that should be used in conjunction with on:keydown:

<Demo demo={ComposableDemos.usehotkeyDemo.target} />

## Supported formats

- `mod+S` – detects `⌘+S` on macOS and `Ctrl+S` on Windows and Linux (depending on the mod key configured)
- `ctrl+shift+X` – handles multiple modifiers
- `alt + shift + L` – you can use whitespace inside hotkey
- `ArrowLeft` – you can use special keys using this [format](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)

## Params

| Param   | Description                                       |
| ------- | ------------------------------------------------- |
| hotkeys | An array of hot keys and their respective actions |

## Events

The use-hotkey action does not dispatch any custom events.

## Definition

```ts
export function hotkey(node: HTMLElement, hotkeys: HotkeyItem[]): ReturnType<Action>;
```
