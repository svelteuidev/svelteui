---
title: use-hot-key
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-hot-key/
description: 'Util generates a random hash with a specified prefix.'
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

The `hotkey` action can be passed to DOM elements or be passed to SvelteUI components using the `use` prop. The actions receives an array of hot keys, which contain the keys to listen to and their respective action. It does not work for input, textareas or select elements.

<Demo demo={ComposableDemos.usehotkeyDemo.usage} />

## Supported formats

* `mod+S` – detects `⌘+S` on macOS and `Ctrl+S` on Windows and Linux (depending on the mod key configured)
* `ctrl+shift+X` – handles multiple modifiers
* `alt + shift + L` – you can use whitespace inside hotkey
* `ArrowLeft` – you can use special keys using this [format](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)

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
