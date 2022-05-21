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

	let ref;
	let mounted = false;
	let placement: PopperProps["placement"] = "start";
	let position: PopperProps["position"] = "bottom";
</script>

<!-- <SimpleGrid
	breakpoints={[
		{ maxWidth: 980, cols: 3, spacing: 'md' },
		{ maxWidth: 755, cols: 2, spacing: 'sm' },
		{ maxWidth: 600, cols: 1, spacing: 'sm' }
	]}
	cols={3}
>
	{#each [...Array(5).keys()] as _, i}
		<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>{i + 1}</Center>
	{/each}
</SimpleGrid> -->

<Button bind:element={ref} on:click={() => mounted = !mounted }>Click here</Button>
<Popper reference={ref} {placement} {position} {mounted}>
	<Box css={{ backgroundColor: '$gray100', padding: '30px' }}>
		<Center>
			<Text>This is a text</Text>
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