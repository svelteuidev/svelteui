---
title: Progress
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/progress/
category: 'data-display'
description: 'Give user feedback for status of the task'
importCode: "import { Progress } from '@svelteuidev/core';"
source: 'svelteui-core/src/components/Progress/Progress.svelte'
docs: 'core/progress'
---

<script>
	import { Demo, ProgressDemos } from '@svelteuidev/demos';
	import { Heading } from "$lib/components";
  	import { base } from '$app/paths';
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<Heading {title} {group} {packageGroup} {slug} {category} {description} {importCode} {source} {docs} />

## Usage

<Demo demo={ProgressDemos.configurator} />

## Multiple sections

You can display multiple sections instead of a single progress bar.
Note that in this case `value` prop will be ignored:

<Demo demo={ProgressDemos.sections} />

## Colors

In previous examples colors from `theme.colors` were used, but any other CSS colors can be used instead:

<Demo demo={ProgressDemos.colors} />

## Tweened values

In case you want smoother transitions between values, you can tween them with the `tween` prop. You can also configure the options that are passed with the `tweenOptions` prop.

<Demo demo={ProgressDemos.tween} />

## Size

Size controls progress bar height. Progress has predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`.
Alternatively, you can use a number to set height in px:

```svelte
<Progress size="sm" /> // -> predefined small size
<Progress size={50} /> // -> { height: 50 }
```

## Radius

Radius controls border-radius of body and filled part.
`xs`, `sm`, `md`, `lg`, `xl` radius values are defined in [theme.radius]({base}/theming/extend-theme/#spacing-radius-and-shadows).
Alternatively, you can use a number to set radius in px:

```svelte
<Progress radius="lg" /> // -> theme predefined large radius
<Progress radius={10} /> // -> { borderRadius: 10 }
```

## With label

<Demo demo={ProgressDemos.label} />

## Accessibility

- Progress bar element has `role="progressbar"` attribute
- Progress bar element has `aria-valuenow` attribute with current value
- `aria-valuemin` and `aria-valuemax` attributes are always set to 0 and 100 as component does not support other values

Provide aria-label attribute to label progress:

```svelte
<Progress aria-label="Uploading progress" value={10} />
```
