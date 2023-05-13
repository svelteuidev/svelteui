---
title: Alert
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/alert/
category: 'feedback'
description: 'Attract user attention with an important message'
importCode: "import { Alert } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Alert/Alert.svelte'
docs: 'core/alert.md'
---

<script>
    import { Demo, AlertDemos } from '@svelteuidev/demos';
    import { Heading } from "$lib/components";
</script>

<svelte:head>
  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={AlertDemos.configurator} />

## Accessibility

- Root element role set to `alert`
- Set `closeButtonLabel` prop to make close button visible for screen readers

```svelte
<Alert withCloseButton /> // -> not ok
<Alert withCloseButton closeButtonLabel="Close alert" /> // -> ok
<Alert /> // -> ok, without close button. the closeButtonLabel is not needed
```
