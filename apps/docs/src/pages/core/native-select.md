---
title: NativeSelect
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/native-select/
category: 'inputs'
description: 'Capture user feedback limited to large set of options'
import: "import { NativeSelect } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/NativeSelect/NativeSelect.svelte'
docs: 'core/native-select.md'
---

<script>
	import { Demo, NativeSelectDemos } from '@svelteuidev/demos';
  	import { Heading } from 'components';
</script>

<Heading />

## Usage

<Demo demo={NativeSelectDemos.configurator} />

## Value Binding

Just like with regular inputs you may bind to the value for two way data binding. The value must match a value from the array passed in to data.

<Demo demo={NativeSelectDemos.binding} />

## Invalid state and error

<Demo demo={NativeSelectDemos.error} />

## Disabled state

<Demo demo={NativeSelectDemos.disabled} />

## With icon

<Demo demo={NativeSelectDemos.icon} />

## Right section

You can replace the icon in the right section with `rightSection` named slot. Note that in this case `clearable` option will not work and you will need to handle it yourself:

<Demo demo={NativeSelectDemos.section} />

## Using objects

You can pass an array of objects instead of strings. In those cases, the key `value` is mandatory, since that value is the one being returned on the `change` event. The key `label` can also be provided and will be the one shown in the select (defaults to `value` if not provided).

<Demo demo={NativeSelectDemos.objects} />

## Accessibility

Provide `aria-label` in case you use component without label for screen reader support:

```svelte
<NativeSelect /> // -> not ok, select is not labeled
<NativeSelect label="My select" /> // -> ok, select and label is connected
<NativeSelect aria-label="My select" /> // -> ok, label is not visible but will be announced by screen
reader
```
