---
title: 'use-focus'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-focus/
description: 'Calls focus on a node once mounted into the DOM'
import: "import { focus } from '@svelteuidev/composables';"
docs: 'composables/use-focus.md'
source: 'svelteui-composables/src/actions/use-focus/use-focus.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

The `use-focus` action is the simplest action out of all. It has a single purpose, and that is to give immediate focus to an element once it is mounted into the DOM. Only "focusable" elements should use this action. Type errors will appear if this is not the case.

<Demo demo={ComposableDemos.useFocusDemo.usage} />

## Definition

```ts
export function focus(node: FocusableElement): ReturnType<Action>;
```
