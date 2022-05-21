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

	let ref;
	let placement = "start";
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


<Button bind:this={ref}>Click here</Button>
<Popper reference={ref}>
	This is a text
</Popper>

<Title>Placements</Title>
<SimpleGrid cols={3}>
	<Button on:click={() => placement = "start"}>Start</Button>
	<Button on:click={() => placement = "center"}>Center</Button>
	<Button on:click={() => placement = "end"}>End</Button>
</SimpleGrid>