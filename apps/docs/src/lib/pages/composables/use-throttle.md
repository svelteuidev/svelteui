---
title: 'use-throttle'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-throttle/
description: 'Get a function that throttles its execution.'
importCode: "import { useThrottle } from '@svelteuidev/composables';"
docs: 'composables/use-throttle.md'
source: 'svelteui-composables/src/utilities/use-throttle/use-throttle.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

Limit the execution of a function. This is especially useful for rate limiting the execution of handlers on events like resize and scroll.

<Demo demo={ComposableDemos.useThrottleDemo.usage} />

## Params

| Param    | Description                                            |
| -------- | ------------------------------------------------------ |
| fn       | A function to be executed after delay milliseconds.    |
| ms       | A zero-or-greater delay in milliseconds.               |
| trailing | If true, call fn again after the time is up.           |
| leading  | If true, call fn on the leading edge of the ms timeout |

## Definition

```js
export function useThrottle<T extends FunctionArgs>(
	fn: T,
	ms?: number,
	trailing?: boolean,
	leading?: boolean
): T;
```
