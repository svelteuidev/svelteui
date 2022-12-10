---
title: Group
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/group/
category: 'layout'
description: 'Compose elements and components in a horizontal flex container'
import: "import { Group } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Group/Group.svelte'
docs: 'core/group.md'
---

<script>
    import { Demo, GroupDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
    import { Alert } from '@svelteuidev/core';
    import { InfoCircled } from 'radix-icons-svelte';
</script>

<Heading />

## Usage

<Demo demo={GroupDemos.configurator} />

## Group children

<Alert icon={InfoCircled}  title="Important" color="blue">
   Group will work only with elements and components that render elements. Strings, numbers, fragments and other parts will not have correct styles.
</Alert>

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
