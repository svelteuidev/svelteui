---
title: MediaQuery
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/media-query/
category: 'data-display'
description: 'Apply styles to children if media query matches'
import: "import { MediaQuery } from '@svelteuidev/core';"
source: 'svelteui-src/components/MediaQuery/MediaQuery.svelte'
docs: 'core/media-query.md'
---

<script>
	import { Demo, MediaQueryDemos } from '@svelteuidev/demos';
  	import { Heading } from 'components';
</script>

<Heading />

## Usage

MediaQuery component adds styles to child element if given media query matches:

<Demo demo={MediaQueryDemos.usage} />

## largerThan and smallerThan props

largerThan and smallerThan props lets you use theme.breakpoints:

<Demo demo={MediaQueryDemos.query} />

## MediaQuery children

**!important** MediaQuery only works with a single child element or component that renders an element. Strings, numbers, fragments and other parts will not have correct styles:

```tsx
// Will work with MediaQuery – single element
<MediaQuery>
    <button>Button</button>
</MediaQuery>

// Will work with MediaQuery – component that renders single element
<MediaQuery>
    <Tooltip>
        <ActionIcon>
            <GearIcon />
        </ActionIcon>
    </Tooltip>
</MediaQuery>
```
