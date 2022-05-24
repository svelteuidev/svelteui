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
		Tooltip,
		Kbd,
		Paper
	} from '$lib';
	import Gear from '../icons/Gear.svelte';
</script>

<Center>
	<Tooltip opened label="ToolTip" withArrow>
		<Button>With tooltip</Button>
	</Tooltip>
</Center>

<Group position="center">
	<Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>M</Kbd>
</Group>

<Center override={{ width: 400 }}>
	<Paper shadow="xs" override={{ padding: '$8' }}>
		<p>Paper is the most basic ui component</p>
		<Text>
			Use it to create cards, dropdowns, modals and other components that require background with
			shadow
		</Text>
	</Paper>
</Center>
