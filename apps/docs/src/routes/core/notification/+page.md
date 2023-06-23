---
title: Notification
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/notification/
category: 'feedback'
description: 'Attract user attention with an important message'
importCode: "import { Notification } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Notification/Notification.svelte'
docs: 'core/notification'
---

<script>
  import { Demo, NotificationDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

Notification is a base component for notification system.

It has 3 variants:

- **default** – with colored line on the left
- **icon** – line is replaced with icon
- **loading** – icon or line are replaced with [Loader]({base}/core/loader)

<Demo demo={NotificationDemos.usage} />

## Colors and state

<Demo demo={NotificationDemos.configurator} />

## Accessibility

To support screen readers set close button aria-label or title with `closeButtonProps`:

```svelte
<Notification closeButtonProps={{ 'aria-label': 'Hide notification' }} />
<Notification closeButtonProps={{ title: 'Hide notification' }} />
```
