---
title: 'use-web-worker'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-web-worker/
description: 'Run expensive functions without blocking the UI'
importCode: "import { useWebWorker } from '@svelteuidev/composables';"
docs: 'composables/use-web-worker.md'
source: 'svelteui-composables/src/utilities/use-web-worker/use-web-worker.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from '@svelteuidev/demos';
</script>

## Usage

The `use-web-worker` composable allows you to run expensive functions without blocking the UI, using a simple syntax that makes use of Promise. Before you start using this function, we suggest you read the Web Worker documentation.

<Demo demo={ComposableDemos.useWebWorkerDemo.usage} />

A more basic example would look something like this:

```svelte
<script>
	import { useWebWorker } from '@svelteuidev/composables';

	const { workerFn } = useWebWorker(() => {
		// some heavy works to do in web worker
	});
</script>
```

## Options

`use-web-worker` takes in an optional second param that allows you to provide dependencies to the function.

```svelte
<script>
	import { useWebWorker } from '@svelteuidev/composables';

	const { workerFn, workerStatus, workerTerminate } = useWebWorker(someHeavyFunction, {
		timeout: 50000,
		dependencies: [
			'https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.js' // dateFns
		]
	});
</script>
```

## Params

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| fn      | A function to be executed in a web worker.     |
| options | Options that effect how the function operates. |

## Definition

```tsx
export function useWebWorker: <T extends (...fnArgs: any[]) => any>(fn: T, options?: WebWorkerOptions) => UseWebWorkerReturn
```
