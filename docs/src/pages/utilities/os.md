---
title: os
group: 'svelteuidev-utilities'
packageGroup: '@svelteuidev/utilities'
slug: /utilities/os/
description: 'Get user os'
import: "import { os as _os } from '@svelteuidev/utilities';"
source: 'svelteui-utilities/src/lib/dist/functions/os/os.ts'
docs: 'utilities/os.md'
---

<script lang='ts'>
    import { UtilityDemos, Demo } from "@svelteuidev/demos";
    import { Heading} from 'components'
</script>

<Heading />

## Usage

The `os` utility function detects a user's Operating System. Possible values are: `undetermined`, `macos`, `ios`, `windows`, `android`, `linux`. If the OS cannot be identified as well as during server side rendering, `undetermined` will be returned.

<Demo demo={UtilityDemos.osDemo} />

## Typescript

```ts
import type { OS } from '@svelteuidev/utilities';
// OS type is 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'
```

## Definition

```ts
export function os(): OS;
```
