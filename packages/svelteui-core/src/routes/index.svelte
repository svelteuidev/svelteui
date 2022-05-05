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
		clipboard,
		InputWrapper,
		NativeSelect
	} from '$lib';
	import { onMount } from 'svelte';
	import Gear from '../icons/Gear.svelte';

	let value = 'Hello Worlds';
</script>

<Input bind:value on:change={(e) => console.log(e)} placeholder="Start Typing" />
<Space h="md" />
<NativeSelect bind:value on:change={(e) => console.log(e)} placeholder="Pick One" />
<Space h="md" />
{value}
