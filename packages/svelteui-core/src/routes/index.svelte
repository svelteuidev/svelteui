<script lang="ts">
	import {
		ActionIcon,
		Anchor,
		BackgroundImage,
		Button,
		Checkbox,
		CloseButton,
		Code,
		Divider,
		Image,
		Loader,
		Switch,
		Text,
		Title,
		Box,
		Stack,
		Group,
		Center,
		Space,
		Badge,
		ThemeIcon,
		Popper,
		Input,
		InputWrapper,
		NativeSelect,
		Fragment,
		Overlay,
		SimpleGrid,
		Container,
		clipboard
	} from '$lib';
	import Gear from '../icons/Gear.svelte';

	import type { PopperProps } from '$lib/components/Popper/Popper.styles';
	import { fade, slide, fly } from 'svelte/transition';

	let ref;
	let mounted = false;
	let withArrow = true;
	let arrowSize = 4;
	let arrowDistance = 4;
	let gutter = 4;
	let transition = fade;
	let placement: PopperProps["placement"] = "start";
	let position: PopperProps["position"] = "bottom";
</script>

<Center>
	<Button bind:element={ref} on:click={() => mounted = !mounted }>Click here</Button>
</Center>
<Popper
	reference={ref}
	{placement}
	{position}
	{mounted}
	{withArrow}
	{arrowSize}
	{arrowDistance}
	{gutter}
	{transition}
	arrowOverride={{ backgroundColor: '$gray100' }}
>
	<Box css={{ backgroundColor: '$gray100', borderRadius: 5, padding: '30px' }}>
		<Center css={{ width: 100 }}>
			<Text>This is a text very long text</Text>
		</Center>
	</Box>
</Popper>

<Space h={30} />
<Title>Placements</Title>
<SimpleGrid cols={3}>
	<Button on:click={() => placement = "start"}>Start</Button>
	<Button on:click={() => placement = "center"}>Center</Button>
	<Button on:click={() => placement = "end"}>End</Button>
</SimpleGrid>

<Space h={30} />
<Title>Positions</Title>
<SimpleGrid cols={4}>
	<Button on:click={() => position = "top"}>Top</Button>
	<Button on:click={() => position = "left"}>Left</Button>
	<Button on:click={() => position = "bottom"}>Bottom</Button>
	<Button on:click={() => position = "right"}>Right</Button>
</SimpleGrid>

<Space h={30} />
<Switch bind:checked={withArrow} label="With arrow"/>

<Space h={30} />
<Title>Arrow Size</Title>
<SimpleGrid cols={2}>
	<Button on:click={() => arrowSize -= 1}>-</Button>
	<Button on:click={() => arrowSize += 1}>+</Button>
	<Text>ArrowSize: {arrowSize}</Text>
</SimpleGrid>

<Space h={30} />
<Title>Arrow Distance</Title>
<SimpleGrid cols={2}>
	<Button on:click={() => arrowDistance -= 1}>-</Button>
	<Button on:click={() => arrowDistance += 1}>+</Button>
	<Text>ArrowDistance: {arrowDistance}</Text>
</SimpleGrid>

<Space h={30} />
<Title>Gutter</Title>
<SimpleGrid cols={2}>
	<Button on:click={() => gutter -= 1}>-</Button>
	<Button on:click={() => gutter += 1}>+</Button>
	<Text>Gutter: {gutter}</Text>
</SimpleGrid>

<Space h={30} />
<Title>Transitions</Title>
<SimpleGrid cols={3}>
	<Button on:click={() => transition = fade}>Fade</Button>
	<Button on:click={() => transition = slide}>Slide</Button>
	<Button on:click={() => transition = fly}>Fly</Button>
</SimpleGrid>