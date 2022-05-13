---
title: 'use-persistent-tab'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-persistent-tab/
description: 'Prevent current tab from being closed by user.'
import: "import { persistenttab } from '@svelteuidev/actions';"
docs: 'actions/use-persistent-tab.md'
source: 'svelteui-actions/src/lib/dist/use-persistent-tab/use-persistent-tab.ts'
---

<script>
    import { persistenttab } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components';

    let isNotClosable = false;

    const code = `
    <script>
        import { persistenttab } from '@svelteuidev/actions'

        let isNotClosable = false;
    <\/script>
    
    <button on:click={() => isNotClosable = !isNotClosable}>
       {isNotClosable ? "Can't close tab" : 'Can close tab'}
    <\/button>

    <div use:persistenttab={isNotClosable}>
        Something important that the user wouldn't want to lose to a page refresh or close
    <\/div>
    `
</script>

<Heading />

## Usage

With the `use-persistenttab` action, prevent current tab from being closed by user.

<Preview cols={1} {code}>
    <button on:click={() => isNotClosable = !isNotClosable}>
       {isNotClosable ? "Can't close tab" : 'Can close tab'}
    </button>

    <div use:persistenttab={isNotClosable}>
        Something important that the user wouldn't want to lose to a page refresh or close
    </div>
</Preview>

## Params

| Param   | Description                                          |
| ------- | ---------------------------------------------------- |
| enabled | Determines whether the action should execute or not. |

## Events

The use-persistenttab action does not dispatch any custom events.

## Definition

```ts
export function persistenttab(node: HTMLElement, attributes: Record<string, number | string>): ReturnType<Action>;
```
