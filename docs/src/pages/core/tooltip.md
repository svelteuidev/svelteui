---
title: Tooltip
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/tooltip/
category: 'overlay'
description: 'Renders tooltip at given element on mouse over or any other event'
import: "import { Tooltip } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Tooltip/Tooltip.svelte'
docs: 'core/tooltip.md'
---

<script>
    import { Demo, TooltipDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={TooltipDemos.configurator} />

## Position and placement

The Tooltip position relative to target element is defined by:

* `position` – tooltip side – `top`, `bottom`, `right` or `left`, defaults to top
* `placement` – tooltip placement relative to the position – `start`, `center` or `end`, defaults to center
* `gutter` – space between tooltip and target element in px, defaults to 5px

```svelte
<Tooltip position="bottom" placement="end" gutter={10} />
```

All available positions and placements:

<Demo demo={TooltipDemos.positions} />
