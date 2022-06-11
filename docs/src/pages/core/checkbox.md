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
    import { Demo, CheckboxDemos } from '@svelteuidev/demos';
    import { Heading } from 'components';

    // const items = [
	// 	{
	// 		value: "@svelteuidev/core",
	// 		label: "@svelteuidev/core"
	// 	},
	// 	{
	// 		value: "@svelteuidev/actions",
	// 		label: "@svelteuidev/actions"
	// 	},
	// 	{
	// 		value: "@svelteuidev/utilities",
	// 		label: "@svelteuidev/utilities"
	// 	},
	// 	{
	// 		value: "@svelteuidev/motion",
	// 		label: "@svelteuidev/motion"
	// 	},
	// 	{
	// 		value: "@svelteuidev/prism",
	// 		label: "@svelteuidev/prism"
	// 	}
	// ];
    // let packages = ["@svelteuidev/core", "@svelteuidev/actions"];

    // const checkbox = `
    // <script>
    //     import { Checkbox } from '@svelteuidev/core'
    // <\/script>

    // <Checkbox label="I agree to sell my privacy"\/>
    // <Checkbox
    //     label="I agree to sell my privacy"
    //     color="red"
    //     radius="xl"
    //     size="xl"
    // \/>
    // <Checkbox
    //     label="I agree to sell my privacy"
    //     color="violet"
    //     radius="xs"
    //     size="md"
    //     disabled
    // \/>
    // `
    // const checkboxStates = `
    // <script>
    //     import { Checkbox } from '@svelteuidev/core'
    // <\/script>

    // <Checkbox checked={false} label="Default checkbox" \/>
    // <Checkbox checked={false} indeterminate label="Indeterminate checkbox" \/>
    // <Checkbox checked label="Checked checkbox" \/>
    // <Checkbox disabled label="Disabled checkbox" \/>
    // <Checkbox disabled checked label="Disabled checked checkbox" \/>
    // <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" \/>
    // `
    // const checkboxSizes = `
    // <script>
    //     import { Checkbox } from '@svelteuidev/core'
    // <\/script>

    // {#each ['xs', 'sm', 'md', 'lg', 'xl'] as size}
    //     <Checkbox size={size} label={\`$\{size\} checkbox\`}\/>
    // {/each}
    // `
    // const checkboxIndeterminateState = `
    // <script>
    //     import { Checkbox } from '@svelteuidev/core'
    // <\/script>

    // <Checkbox checked={false} indeterminate label="Indeterminate checkbox" \/>
    // <Checkbox checked={true} indeterminate label="Indeterminate checkbox" \/>
    // `
    // const checkboxCheckboxGroup = `
    // <script>
    //     import { CheckboxGroup } from '@svelteuidev/core'
    // <\/script>

    // <CheckboxGroup
	//  	items={items} 
	//  	bind:value={packages} 
	//  	label={"Choose your packages"} 
	//  \/>
    //  <Title align='center'>Packages<\/Title>
    //  <Text align='center'>{packages}<\/Text>
    // `
</script>

<Heading />

## Usage

<Demo demo={CheckboxDemos.configurator} />

## States

<Demo demo={CheckboxDemos.states} />

## Replace icon

<Demo demo={CheckboxDemos.icon} />

## Sizes

Checkbox has 5 predefined sizes: `xs`, `sm`, `md`, `lg`, `xl`. Size defines label font-size and input width and height:

<Demo demo={CheckboxDemos.sizes} />

## Indeterminate state

Checkbox supports indeterminate state. When `indeterminate` prop is true, `checked` prop is ignored:

<Demo demo={CheckboxDemos.indeterminate} />

## Accessibility

Provide `aria-label` in case you use checkbox without label for screen reader support:

```svelte
<Checkbox /> // -> not ok, input is not labeled
<Checkbox label="My checkbox" /> // -> ok, input and label is connected
<Checkbox aria-label="My checkbox" /> // -> ok, label is not visible but will be announced by screen reader
```

# CheckboxGroup

<Demo demo={CheckboxDemos.groupConfigurator} />

## Controlled

```svelte
<script>
    import { CheckboxGroup } from '@svelteuidev/core';

    const items = [
        { label: 'Svelte', value: 'svelte' },
        { label: 'React', value: 'react' },
        { label: 'Vue', value: 'vue' },
        { label: 'Angular', value: 'angular' },
        { label: 'Solid', value: 'solid' }
    ];
</script>

<CheckboxGroup {items} value={['svelte']} />
```
