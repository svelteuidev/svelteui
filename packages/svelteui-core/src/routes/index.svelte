<script lang="ts">
	import {
		ActionIcon,
		BackgroundImage,
		Button,
		Checkbox,
		CloseButton,
		Code,
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
		Input,
		InputWrapper,
		NativeSelect,
		Fragment,
		Overlay,
		SimpleGrid,
		clipboard
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
</script>

<SimpleGrid
	breakpoints={[
		{ maxWidth: 980, cols: 3, spacing: 'md' },
		{ maxWidth: 755, cols: 2, spacing: 'sm' },
		{ maxWidth: 600, cols: 1, spacing: 'sm' }
	]}
	cols={3}
>
	<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>1</Center>
	<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>2</Center>
	<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>3</Center>
	<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>4</Center>
	<Center override={{ bc: 'AliceBlue', padding: '$12', color: '$blue600' }}>5</Center>
</SimpleGrid>
