---
title: 'use-persistent-tab'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-persistent-tab/
description: 'Prevent current tab from being closed by the user.'
importCode: "import { persistenttab } from '@svelteuidev/composables';"
docs: 'composables/use-persistent-tab.md'
source: 'svelteui-composables/src/actions/use-persistent-tab/use-persistent-tab.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

With the `use-persistent-tab` action, you can prevent current tab from being closed by user. A common use case for this is when a user is filling out a form, and you don't want them to lose their data/progress.

<Demo demo={ComposableDemos.usePersistentTabDemo.usage} />

## Params

| Param   | Description                                          |
| ------- | ---------------------------------------------------- |
| enabled | Determines whether the action should execute or not. |

## Definition

```js
export function persistenttab(
	node: HTMLElement,
	attributes: Record<string, number | string>
): ReturnType<Action>;
```
