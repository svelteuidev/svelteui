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
		clipboard
	} from '$lib';
	import Gear from '../icons/Gear.svelte';

	let data = ['React', 'Svelte', 'Angular', 'Vue'];
	let value = 'Hello Worlds';
	let nValue = 'Test Value';
	let copied = false;
	function copyTimeout() {
		copied = true;
		setTimeout(function () {
			copied = false;
		}, 1000);
	}
</script>

<Input bind:value on:change={(e) => console.log(e)} placeholder="Start Typing" />
<Space h="md" />
<!-- 
	Native Select's value binding needs work
 -->
<NativeSelect
	bind:value={nValue}
	label="Best Framework"
	description="Pick the best framework"
	placeholder="Pick One"
	{data}
	on:change={(e) => console.log(e)}
/>
<Space h="md" />
<Stack>
	<Text>Input Value: {value}</Text>
	<Text>NativeSelect Value: {nValue}</Text>
</Stack>
<Space h="md" />
<Button
	on:useclipboard={copyTimeout}
	color={copied ? 'green' : 'blue'}
	use={[[clipboard, 'This is the text to be copied']]}
>
	{copied ? 'Copied' : 'Click to copy'}
</Button>
<Space h="md" />
<Checkbox label="Please accept these terms and conditions without reading" />
