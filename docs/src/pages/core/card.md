---
title: Card
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/card/
category: 'data-display'
description: 'Card with context styles for Image and Divider components'
import: "import { Card } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Card/Card.svelte'
docs: 'core/card.md'
---

<script>
    import { Demo, CardDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={CardDemos.usage} />

## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.` Card.Section` works the following way:

* If the component is a first child in Card then it has negative top, left and right margins
* If it is a last child in Card then it has negative bottom, left and right margins
* If it is in the middle then only left and right margins will be negative

```svelte
<Card.Container p="xl">
    {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
    <Card.Section>First section</Card.Section>

    {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}
    <Text>Some other content</Text>

    {/* right, left margins are negative – -1 * theme.spacing.xl */}
    <Card.Section>Middle section</Card.Section>

    {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
    <Card.Section>Last section</Card.Section>
</Card.Container>
```

Note that Card relies on mapping direct children and you cannot use fragments or others wrappers for `Card.Section`:

```svelte
<Card.Container p="xl">
    <div>
        <Card.Section>Won't work</Card.Section>
    </div>

    <Card.Section>Works fine</Card.Section>
</Card.Container>
```
