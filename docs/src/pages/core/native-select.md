---
title: NativeSelect
group: 'svelteuidev-core'
packageGroup: '@svelteuidev/core'
slug: /core/native-select/
category: 'inputs'
description: 'Capture user feedback limited to large set of options'
import: "import { NativeSelect } from '@svelteuidev/core';"
source: 'svelte-core/src/lib/components/NativeSelect/NativeSelect.svelte'
docs: 'core/native-select.md'
---

<script>
	import { NativeSelect, Text } from '@svelteuidev/core';
	import { StarFilled, ChevronDown } from 'radix-icons-svelte';
	import { Heading, Preview } from 'components';

	let value = 'Svelte';

	const nativeSelect = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		description="This is anonymous"
		required
	\/>
    `;
	const nativeSelectValue = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect
		data={['Svelte', 'React', 'Vue', 'Angular']}
		bind:value
		override={{ select: { padding: 0 } }}
		label="What is the best framework?"
	\/>

	<Text>The best is <Text root="span" inline variant="gradient">{value}<\/Text><\/Text>
    `;
	const nativeSelectInvalid = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		error
	\/>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		error="Pick at least one item"
	\/>
    `;
	const nativeSelectDisabled = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect data={['Svelte', 'Vue', 'Angular', 'React']} label="Disabled select" disabled \/>
    `;
	const nativeSelectWithIcon = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		label="Pick the best"
		icon={StarFilled}
		override={{ '.withIcon': { pl: '40px !important' } }}
	\/>
    `;
	const nativeSelectRight = `
    <script>
        import { NativeSelect } from '@svelteuidev/core'
    <\/script>

	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		label="Select your favorite framework/library"
		rightSection={ChevronDown}
	\/>
    `;
</script>

<Heading />

## Usage

<Preview cols={1} width={90} code={nativeSelect}>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		description="This is anonymous"
		required
	/>
</Preview>

## Value Binding

Just like with regular inputs you may bind to the value for two way data binding. The value must match a value from the array passed in to data.

<Preview cols={1} width={90} code={nativeSelectValue}>
	<NativeSelect
		data={['Svelte', 'React', 'Vue', 'Angular']}
		bind:value
		override={{ select: { padding: 0 } }}
		label="What is the best framework?"
	/>

	<Text>The best is <Text root="span" inline variant="gradient">{value}</Text></Text>
</Preview>

## Invalid state and error

<Preview cols={1} width={90} code={nativeSelectInvalid}>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		error
	/>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		placeholder="Pick one"
		label="Select your favorite framework/library"
		error="Pick at least one item"
	/>
</Preview>

## Disabled state

<Preview cols={1} width={90} code={nativeSelectDisabled}>
	<NativeSelect data={['Svelte', 'Vue', 'Angular', 'React']} label="Disabled select" disabled />
</Preview>

## With icon

<Preview cols={1} width={90} code={nativeSelectWithIcon}>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		label="Pick the best"
		icon={StarFilled}
		override={{ '.withIcon': { pl: '40px !important' } }}
	/>
</Preview>

## Right section You can replace icon in right section with `rightSection` named slot. Note that in
this case `clearable` option will not work and will need to handle it yourself:

<Preview cols={1} width={90} code={nativeSelectRight}>
	<NativeSelect
		data={['Svelte', 'Vue', 'Angular', 'React']}
		label="Select your favorite framework/library"
		rightSection={ChevronDown}
	/>
</Preview>

## Accessibility Provide `aria-label` in case you use component without label for screen reader support: 

```svelte
<NativeSelect /> // -> not ok, select is not labeled
<NativeSelect label="My select" /> // -> ok, select and label is connected
<NativeSelect aria-label="My select" /> // -> ok, label is not visible but will be announced by screen reader 
```
