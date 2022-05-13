---
title: Group
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/group/
category: 'layout'
description: 'Compose elements and components in a horizontal flex container'
import: "import { Group } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/Group/Group.svelte'
docs: 'core/group.md'
---

<script>
    import { Group, Button, NativeSelect, Switch } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const positionList = ['apart', 'center', 'left', 'right']
    let position = 'apart'
    const spacingList = ['xs', 'sm', 'md', 'lg', 'xl']
    let spacing = 'md'
    let grow = false

    const group = `
    <script>
        import { Group } from '@svelteuidev/core'
    <\/script>

    <Group>
      <Button variant="outline">1<\/Button>
      <Button variant="outline">2<\/Button>
      <Button variant="outline">3<\/Button>
    <\/Group>
    `
</script>

<Heading />

## Usage

<Preview cols={1} width={75} code={group}>
    <Group grow={grow} children={3} spacing={spacing} position={position}>
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
    <NativeSelect data={positionList} bind:value={position} label='Position' />
    <NativeSelect data={spacingList} bind:value={spacing} label='Spacing' />
    <Switch size='lg' on:change={() => grow = !grow} />
</Preview>

## Group children

Group component uses the `children` prop to add styles to its children

```svelte
<Group children={3}>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
</Group>
```

**!important** Group will work only with React elements. Strings, numbers, fragments and other parts will
not have correct styles:

```svelte
<script>
    // Invalid Group usage, do not do this
    import { Group, Fragment } from '@svelteuidev/core';
</script>

<Group children={3}>
    First string
    <Fragment>
    <div>element inside fragment</div>
    </Fragment>
    {20}
</Group>
```

## Browser support

Group uses [flexbox gap](https://caniuse.com/flexbox-gap) to add spacing between children.
In older browsers Group children will not have spacing.