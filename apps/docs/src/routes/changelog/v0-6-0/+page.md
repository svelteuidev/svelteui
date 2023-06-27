---
title: 'Version 0.6.0'
order: 1
release: https://github.com/svelteuidev/svelteui/releases/tag/0.5.0
date: 'May 13th, 2022'
---

<script>
	import { Badge, Box, Center, Group, Space, Stack, ThemeIcon, Overlay, Checkbox, Input, InputWrapper, SimpleGrid, NativeSelect, Button, Text } from '@svelteuidev/core'
	import { Prism } from '@svelteuidev/prism'
	import { Calendar, MagnifyingGlass } from "radix-icons-svelte";
	import { MinorHeading } from '$lib/components';
	import { base } from '$app/paths';

  	let code = `
		const a = 2;
		const b = 2;

		console.log(a + b);

		// this is a function
		async function add(a, b) {
			return a + b;
		}
		await add(a, b);
	`;

	const boxStyle = {
		backgroundColor: '$gray50',
		textAlign: 'center',
		padding: '$14',
		borderRadius: '$md',
		cursor: 'pointer',

		'&:hover': {
			backgroundColor: '$gray100',
		},
	}

	let visible
	const example = ['Svelte', 'React', 'Vue', 'Angular']
	const data = ['left', 'right', 'center', 'apart']
	$: value = 'left'
	$: exampleValue = 'Svelte'
</script>

<svelte:head>

  <title>{title} - SvelteUI</title>
</svelte:head>

<MinorHeading {title} {order} {release} {date} />

## New features and components 🔥

### _Components:_

<Stack>

[Badge]({base}/core/badge) Component:

<Group>
	<Badge>BETA</Badge>
	<Badge variant='outline'>BETA</Badge>
	<Badge variant='gradient'>BETA</Badge>
</Group>

[Box]({base}/core/box) Component:

<Box css={boxStyle}>
	Box lets you add inline styles with the css prop
</Box>

[Center]({base}/core/center) Component:

<Center override={{bc: 'AliceBlue', py: '$20'}}>
	<p>Centers elements vertically and horizontally</p>
</Center>

[Group]({base}/core/group) Component:

<NativeSelect
{data}
bind:value
override={{select: {padding: 0}}}
label='Position'
/>

<Group override={{bc: 'AliceBlue', padding: '$5'}} position={value}>
<Button variant="outline">1</Button>
<Button variant="outline">2</Button>
<Button variant="outline">3</Button>
</Group>

[Space]({base}/core/space) Component:

<Box css={{d: 'flex', fd: 'column'}}>

  <p>there is vertical space between us</p>
  <Space h='sm' />
  <p>there is vertical space between us</p>
</Box>

<Box css={{d: 'flex'}}>

  <p>there is horizontal space between us</p>
  <Space w='md' />
  <p>there is horizontal space between us</p>
</Box>

[Stack]({base}/core/stack) Component:

<Stack override={{height: 300}}>
<Button variant="outline">1</Button>
<Button variant="outline">2</Button>
<Button variant="outline">3</Button>
</Stack>

[ThemeIcon]({base}/core/theme-icon) Component:

<Group>
	<ThemeIcon variant="outline" radius="xl" size="xl" color="violet"><Calendar size={20} /></ThemeIcon>
	<ThemeIcon variant="light" color="red"><Calendar /></ThemeIcon>
	<ThemeIcon variant="gradient"><Calendar /></ThemeIcon>
</Group>

[Overlay]({base}/core/overlay) Component:

<Stack override={{}} justify='start'>
	<Box css={{ h: 100, position: 'relative' }}>
		{#if visible}
		  <Overlay opacity={0.6} color="#000" zIndex={5} />
		{/if}
		<Button color={visible ? 'red' : 'teal'}>
			{!visible ? 'Click as much as you like' : "Won't click, haha"}
		</Button>
	</Box>
	<Box>
		<Button on:click={() => visible = !visible}>Toggle overlay</Button>
	</Box>
</Stack>

[Checkbox]({base}/core/checkbox) Component:

<Checkbox label='Accept these terms without reading' />

[Input]({base}/core/input) Component:

<Input
	placeholder='Start Typing'
	rightSectionWidth={70}
/>

[InputWrapper]({base}/core/input-wrapper) Component:

<InputWrapper
id="input-demo"
required
label="Credit card information"
description="Please enter your credit card information, we need some money"
error="Your credit card expired"

>   <Input id="input-demo" placeholder="Your email" />
> </InputWrapper>

[SimpleGrid]({base}/core/simple-grid) Component:

<SimpleGrid
breakpoints={[
{ maxWidth: 980, cols: 3, spacing: 'md' },
{ maxWidth: 755, cols: 2, spacing: 'sm' },
{ maxWidth: 600, cols: 1, spacing: 'sm' }
]}
cols={3}

> {#each [...Array(5).keys()] as \_, i}

    <Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>

{/each}
</SimpleGrid>

[NativeSelect]({base}/core/native-select) Component:

<NativeSelect
data={example}
bind:value={exampleValue}
override={{select: {padding: 0}}}
label='What is the best framework?'
/>

<Text>The best is <Text root='span' inline variant='gradient'>{exampleValue}</Text></Text>

Fragment Component
ServerRender Component
BrowserRender Component
</Stack>

### _Actions:_

[use-lazy]({base}/actions/use-lazy) Lazily attach properties to any DOM element when it is in the window.

[use-long-press]({base}/actions/use-long-press) Creates a longpress event when mousedown is above a duration in milliseconds

[use-persistent-tab]({base}/actions/use-persistent-tab) Prevent current tab from being closed by user

[use-portal]({base}/actions/use-portal) Render an element or component anywhere in the DOM

### _Utilities:_

[hash]({base}/utilities/hash) Util generates a random hash with a specified prefix

### _Motion:_

[Animation]({base}/motion/animation) Is used to apply animations to its children.

### _Prism:_

> As promised, the SvelteUI Prism package has been released in this update. You can now get that sweet sweet syntax highlighting, plus some other nice features!

[Prism]({base}/others/prism) component:

<Box css={{pre: {bc: '$gray50'}, 'pre code': {color: '$gray900'}}}>
<Prism code={code} />
</Box>

## Bug fixes and improvements

### _Packages:_

- Fixed components not being reactive (can't believe it took this long)
- Fixed use-css-variable action not cleaning up old props correctly
- Fixed image placeholder container not occupying the width and height set by the prop
- Fixed switch animation being cut when enabled
- Fixed component errors not showing correct element tag styling
- Added action forwarding to components by default
- Added top level element binding via the element property to components.
- Added ripple prop for button
- Added override prop to SvelteUIProvider
- Added dark and light theme configuration to SvelteUIProvider

### _Docs:_

- Migrated docs once again to a more custom solution (will allow examples to be better)
