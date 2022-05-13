---
title: Checkbox
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/checkbox/
category: 'inputs'
description: 'Add inline styles to any element or component with css prop'
import: "import { Checkbox } from '@svelteuidev/core';"
source: 'svelteui-core/src/lib/components/Checkbox/Checkbox.svelte'
docs: 'core/checkbox.md'
---

<script>
    import { Checkbox, CheckboxGroup, Text, Title } from '@svelteuidev/core';
    import { Heading, Preview } from 'components';

    const items = [
		{
			value: "@svelteuidev/core",
			label: "@svelteuidev/core"
		},
		{
			value: "@svelteuidev/actions",
			label: "@svelteuidev/actions"
		},
		{
			value: "@svelteuidev/utilities",
			label: "@svelteuidev/utilities"
		},
		{
			value: "@svelteuidev/motion",
			label: "@svelteuidev/motion"
		},
		{
			value: "@svelteuidev/prism",
			label: "@svelteuidev/prism"
		}
	];
    let packages = ["@svelteuidev/core", "@svelteuidev/actions"];

    const checkbox = `
    <script>
        import { Checkbox, CheckboxGroup } from '@svelteuidev/core'
    <\/script>
    `
</script>

<Heading />

## Usage

<Preview cols={1}>
    <Checkbox label="I agree to sell my privacy"/>
    <Checkbox
      label="I agree to sell my privacy"
      color="red"
      radius="xl"
      size="xl"
    />
    <Checkbox
      label="I agree to sell my privacy"
      color="violet"
      radius="xs"
      size="md"
      disabled
    />
</Preview>

## States

<Preview cols={1}>
    <Checkbox checked={false} label="Default checkbox" />
    <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
    <Checkbox checked label="Checked checkbox" />
    <Checkbox disabled label="Disabled checkbox" />
    <Checkbox disabled checked label="Disabled checked checkbox" />
    <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
</Preview>

## Sizes

Checkbox has 5 predefined sizes: xs, sm, md, lg, xl. Size defines label font-size, input width and height:

```svelte
<Checkbox size="xl" /> // -> predefined xl size
```

<Preview cols={1}>
{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
    <Checkbox size={size} label={`${size} checkbox`}/>
{/each}
</Preview>

## Indeterminate state

Checkbox supports indeterminate state. When `indeterminate` prop is true,
`checked` prop is ignored:

<Preview cols={1}>
    <Checkbox checked={false} indeterminate label="Indeterminate checkbox" />
    <Checkbox checked={true} indeterminate label="Indeterminate checkbox" />
</Preview>


## Accessibility

Provide `aria-label` in case you use checkbox without label for screen reader support:

```svelte
<Checkbox /> // -> not ok, input is not labeled
<Checkbox label="My checkbox" /> // -> ok, input and label is connected
<Checkbox aria-label="My checkbox" /> // -> ok, label is not visible but will be announced by screen reader
```

## CheckboxGroup

<Preview cols={1}>
    <CheckboxGroup
	 	items={items} 
	 	bind:value={packages} 
	 	label={"Choose your packages"} 
	 />
     <Title align='center'>Packages</Title>
     <Text align='center'>{packages}</Text>
</Preview>