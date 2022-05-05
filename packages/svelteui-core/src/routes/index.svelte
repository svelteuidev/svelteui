<script lang="ts">
	import {
		ActionIcon,
		BackgroundImage,
		Button,
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
		clipboard
	} from '$lib';
	import ChevronDown from '../icons/ChevronDown.svelte';

	let is = false;
	const toggle = () => (is = !is);

	const props = {
		placeholder: 'Your email',
		numProp: 12,
		override: {
			bg: '$blue600',
			textAlign: 'left',
			gay: 3
		}
	};
</script>

<ThemeIcon size="xl" radius="sm">X</ThemeIcon>
<Space h="md" />
<Button on:click={toggle} color={is ? 'blue' : 'green'}>Click Me</Button>
<Space h="md" />
<Badge variant="gradient">{is}</Badge>
<Space h="md" />
<Input placeholder="Hello world" />
<Space h="md" />
