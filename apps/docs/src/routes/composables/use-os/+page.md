---
title: use-os
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/os/
description: 'Get user os'
importCode: "import { useOs } from '@svelteuidev/composables';"
source: 'svelteui-composables/src/utilities/use-os/use-os.ts'
docs: 'composables/use-os.md'
---

<script lang='ts'>
  import { ComposableDemos, Demo } from "@svelteuidev/demos";
  import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {description} {importCode} {docs} {source} />

## Usage

The `use-os` composable detects a user's Operating System. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`. If the OS cannot be identified as well as during server side rendering, `undetermined` will be returned.

<Demo demo={ComposableDemos.useOsDemo.usage} />

## Typescript

```js
import type { OS } from '@svelteuidev/composables';
// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
```

## Definition

```js
export function useOs(): OS;
```
