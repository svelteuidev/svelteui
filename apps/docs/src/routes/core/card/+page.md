---
title: Card
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/card/
category: 'data-display'
description: 'Card with context styles for Image and Divider components'
importCode: "import { Card } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Card/Card.svelte'
docs: 'core/card'
---

<script>
    import { Demo, CardDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={CardDemos.usage} />

## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.` Card.Section` works the following way:

- If the component is the first child in Card, then it has negative top, left and right margins
- If it is the last child in Card, then it has negative bottom, left and right margins
- If it is in the middle, then only left and right margins will be negative

Note that due to certain limitations of Svelte, this is not automatic behavior. Because of this, `first` and `last` props are exported to declare positioning.

This may change in the future, as the Group component used to export a `children` prop. However, the need for that is gone. We've found a way to have runtime checks, but haven't perfected the API yet.

```svelte
<Card.Container padding="xl">
	<!-- top, right, left margins are negative – -1 * theme.spacing.xl -->
	<Card.Section first>First section</Card.Section>

	<!-- Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card -->
	<Text>Some other content</Text>

	<!-- right, left margins are negative – -1 * theme.spacing.xl -->
	<Card.Section>Middle section</Card.Section>

	<!-- bottom, right, left margins are negative – -1 * theme.spacing.xl -->
	<Card.Section last>Last section</Card.Section>
</Card.Container>
```

Note that Card relies on mapping direct children and you cannot use fragments or others wrappers for `Card.Section`:

```svelte
<Card.Container padding="xl">
	<div>
		<Card.Section>Won't work</Card.Section>
	</div>

	<Card.Section first>Works fine</Card.Section>
</Card.Container>
```
