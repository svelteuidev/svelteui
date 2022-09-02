---
title: Anchor
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/anchor/
category: 'navigation'
description: 'Display links with theme styles'
import: "import { Anchor } from '@svelteuidev/core';"
source: 'svelteui-src/components/Anchor/Anchor.svelte'
docs: 'core/anchor.md'
---

<script>
    import { Demo, AnchorDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Anchor is a wrapper around the [Text](core/text.md) component that uses `a` as the root of the element. It supports the same props as the `Text` component.

<Demo demo={AnchorDemos.usage} />

## Usage with svelte-routing and other libraries

[svelte routing](https://github.com/EmilTholin/svelte-routing#readme)

```svelte
<script>
	import { Link } from 'svelte-routing';
	import { Anchor } from '@svelteuidev/core';
</script>

<Anchor root={Link} to="/">Svelte router link</Anchor>
```
