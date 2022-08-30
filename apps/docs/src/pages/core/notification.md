---
title: Notification
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/notification/
category: 'feedback'
description: 'Attract user attention with an important message'
import: "import { Notification } from '@svelteuidev/core';"
source: 'svelteui-src/components/Notification/Notification.svelte'
docs: 'core/notification.md'
---

<script>
    import { Demo, NotificationDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';
</script>

<Heading />

## Usage

Notification is a base component for notification system.

Notification component has 3 variants:

- **default** – with colored line on the left
- **icon** – line is replaced with icon
- **loading** – icon or line are replaced with [Loader](core/loader)

<Demo demo={NotificationDemos.usage} />

## Colors and state

<Demo demo={NotificationDemos.configurator} />

## Accessibility

To support screen readers set close button aria-label or title with `closeButtonProps`:

```svelte
<Notification closeButtonProps={{ 'aria-label': 'Hide notification' }} />
<Notification closeButtonProps={{ title: 'Hide notification' }} />
```
