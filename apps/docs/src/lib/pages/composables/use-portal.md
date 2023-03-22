---
title: 'use-portal'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-portal/
description: 'Render an element or component anywhere in the DOM'
importCode: "import { portal } from '@svelteuidev/composables';"
docs: 'composables/use-portal.md'
source: 'svelteui-composables/src/actions/use-portal/use-portal.ts'
---

<script>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

Render any component or element at the end of `document.body` or at given element. Modal and Drawer components use Portal by default. Use the `portal` action to render a component or element outside of it's parent. The portal action takes one argument (target):

<Demo demo={ComposableDemos.usePortalDemo.usage} />

You can specify a DOM node where portal will be rendered by passing target argument. If you don't specify the target, it will be appended to the `document.body` for each action instance. Target can be a HTMLElement `{'use:portal={document.body}'}` or a CSS selector `{'use:portal={"#svelteui"}'}` that points to an already existing element.

## Params

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| target | DOM element or CSS selector to be appended to. |

## Definition

```js
export function portal(node: HTMLElement, target: Target): ReturnType<Action>;
```
