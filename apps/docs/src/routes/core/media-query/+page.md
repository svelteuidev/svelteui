---
title: MediaQuery
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/media-query/
category: 'data-display'
description: 'Apply styles to children if media query matches'
importCode: "import { MediaQuery } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/MediaQuery/MediaQuery.svelte'
docs: 'core/media-query'
---

<script>
	import { Demo, MediaQueryDemos } from '@svelteuidev/demos';
  import { Alert } from '@svelteuidev/core';
  import { InfoCircled } from 'radix-icons-svelte';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

MediaQuery component adds styles to child element if the given media query matches:

<Demo demo={MediaQueryDemos.usage} />

## largerThan and smallerThan props

`largerThan` and `smallerThan` props lets you use `theme.breakpoints`:

<Demo demo={MediaQueryDemos.query} />

## MediaQuery children

<Alert iconComponent={InfoCircled} title="Important" color="blue" >
   MediaQuery only works with a single child element or component that renders an element. Strings, numbers, fragments and other parts will not have correct styles.
</Alert>

```svelte
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
