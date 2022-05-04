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
		clipboard
	} from '$lib';

	let is = false;
	const toggle = () => (is = !is);
	let textToCopy = 'This message was copied';
	let copied = false;
</script>

<ThemeIcon size="xl" radius="sm">X</ThemeIcon>
<Space h="md" />
<Button on:click={toggle} color={is ? 'blue' : 'green'}>Click Me</Button>
<Space h="md" />
<Badge variant="gradient">{is}</Badge>
<Space h="md" />
<Center override={{ width: '$96', h: '200px', bc: 'AliceBlue' }}>
	<div
		on:useclipboard={() => {
			copied = true;
			setTimeout(function () {
				copied = false;
			}, 1000);
		}}
		use:clipboard={textToCopy}
	>
		<Button color={copied ? 'green' : 'blue'}>{copied ? 'copied' : 'Click me to copy text'}</Button>
	</div>
</Center>
