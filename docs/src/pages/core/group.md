---
title: Group
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/group/
category: 'layout'
description: 'Compose elements and components in a horizontal flex container'
import: "import { Group } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Group/Group.svelte'
docs: 'core/group.md'
---

<script>
    import { Demo, GroupDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={GroupDemos.configurator} />

## Group children

**!important** Group will work only with elements and Components that render elements. Strings, numbers, fragments and other parts will not have correct styles:

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
